import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useTransition,
} from "remix"
import isMobile from "ismobilejs"
export function meta() {
  return { title: "Planejamento" }
}

import resetcss from "normalize.css"
import fonts from "./assets/fonts/icons.css"
import global from "./assets/global.css"
// import ReactTooltip from "react-tooltip"
import { ThemeProvider } from "./components/contexts/theme"
import { SmoothScrollProvider } from "./components/contexts/scroll"
import clsx from "clsx"
export function links() {
  return [
    { rel: "stylesheet", href: resetcss },
    { rel: "stylesheet", href: fonts },
    { rel: "stylesheet", href: global },
  ]
}
export const loader = async ({ request }) => {
  const mobile = isMobile(request.headers.get("user-agent")).any

  return { mobile }
}
export default function App() {
  const { mobile } = useLoaderData()

  return (
    <ThemeProvider>
      <SmoothScrollProvider options={{ smooth: true, class: "inView" }}>
        <html lang="pt-BR" className={clsx(mobile && "mobile")}>
          <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <Meta />
            <Links />
          </head>
          <body>
            <Outlet />

            <ScrollRestoration />
            <Scripts />
            {process.env.NODE_ENV === "development" && <LiveReload />}
            {/* <ReactTooltip place="top" type="dark" effect="solid" /> */}
          </body>
        </html>
      </SmoothScrollProvider>
    </ThemeProvider>
  )
}
