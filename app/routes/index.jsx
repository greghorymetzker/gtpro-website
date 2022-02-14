import { Layout } from "~/components/Layout/Layout"
import Header from "~/components/Header/Header"
import { Home } from "~/views/Home/Home"
import { Home as HomeMobile } from "~/views/Home/HomeMobile"
import Footer from "~/components/Footer/Footer"
import isMobile from "ismobilejs"
import { useLoaderData } from "remix"

export function links(data) {
  return [...Home.links, ...HomeMobile.links, ...Footer.links, ...Layout.links]
}

export const loader = async ({ request }) => {
  const mobile = isMobile(request.headers.get("user-agent")).any

  return { mobile }
}
export default function Index() {
  const { mobile } = useLoaderData()
  return (
    <>
      <Header></Header>
      <Layout scroll mobile={mobile}>
        {mobile ? <HomeMobile /> : <Home />}
      </Layout>
      {!mobile && <Footer></Footer>}
    </>
  )
}
