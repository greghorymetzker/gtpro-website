import { json } from "@remix-run/server-runtime"
import { authenticator } from "~/services/auth"

export let loader = async ({ request, params }) => {
  let isAuth = await authenticator.isAuthenticated(request)
  if (!isAuth) {
    return json("not authorized", { status: 401 })
  }

  let data = await getArticles()
  return json(data, { status: 200 })
}
