import { withYup } from "@remix-validated-form/with-yup"
import { useCatch, useLoaderData } from "remix"
import { ValidatedForm, validationError } from "remix-validated-form"
import * as yup from "yup"
import { authenticator } from "~/services/auth"
import { AuthForm } from "../components/Auth/AuthForm/AuthForm"
import Box from "../components/BaseKit/Box/Box"
export function links() {
  return [...AuthForm.links]
}

const validator = withYup(
  yup.object({
    email: yup.string().nullable().email("Email Incorreto").required("Campo obrigatório"),
    password: yup.string().nullable().required("Campo obrigatório"),
  }),
)

export function CatchBoundary() {
  let caught = useCatch()
  console.log(caught)
  return (
    <div>
      <h2>We couldn't find that page!</h2>
    </div>
  )
}

export const action = async ({ request, context }) => {
  let form = request.clone()
  const fieldValues = validator.validate(await form.formData())
  if (fieldValues.error) return validationError(fieldValues.error)

  return await authenticator.authenticate("form", request, {
    successRedirect: "/cms",
    failureRedirect: "/logar",
    context,
  })
}

export const loader = async ({ request }) => {
  await authenticator.isAuthenticated(request, {
    successRedirect: "/cms",
  })
  return {
    email: null,
    password: null,
  }
}

export default function Index() {
  const { defaultValues } = useLoaderData()

  return (
    <Box
      flex={1}
      style={{
        height: "100%",
      }}
    >
      <ValidatedForm
        validator={validator}
        method="post"
        defaultValues={defaultValues}
        style={{
          height: "100%",
        }}
      >
        <AuthForm defaultValues={defaultValues} />
      </ValidatedForm>
    </Box>
  )
}
