import { db } from "~/utils/utils"
import { FormStrategy } from "remix-auth-form"
import { Authenticator } from "remix-auth"
import { sessionStorage } from "./session"
import bcryptjs from "bcryptjs"
export let authenticator = new Authenticator(sessionStorage)

authenticator.use(
  new FormStrategy(async ({ form, context }) => {
    let email = form.get("email")
    let password = form.get("password")
    let user = null

    if (!email || !password) {
      throw new Error("Error")
    }

    user = await db.auths.findFirst({
      where: { email },
    })
    let compare = await bcryptjs.compare(password, user?.password)

    if (!compare) {
      user = null
    }
    if (!user) {
      throw new Error("Error")
    }
    return user
  }),
  "form",
)
