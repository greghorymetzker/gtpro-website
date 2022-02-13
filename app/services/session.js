import { createCookieSessionStorage } from "remix"

export let sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "_session",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secrets: ["5PJ0BLJ5G2ZFokWv4BTJ8snNMI3y9ohE7szjZ6OPzNmtM"],
    secure: process.env.NODE_ENV === "production",
  },
})
export let { getSession, commitSession, destroySession } = sessionStorage
