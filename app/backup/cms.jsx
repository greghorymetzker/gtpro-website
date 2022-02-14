import { Outlet } from "react-router"
import Box from "~/components/BaseKit/Box/Box"
import { LeftNavbar, links as LeftNavbarlinks } from "~/components/Navigation/LeftNavbar/LeftNavbar"
import { links as TitleLinks, Title } from "~/components/Title/Title"
import { authenticator } from "~/services/auth"
import { Layout } from "~/components/Layout/Layout"

export function links() {
  return [...LeftNavbarlinks, ...TitleLinks]
}

export let loader = async ({ request }) => {
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/",
  })
  return null
}

export default function Index() {
  return (
    <>
      <LeftNavbar />
      <Layout>
        <Outlet></Outlet>
      </Layout>
    </>
  )
}
