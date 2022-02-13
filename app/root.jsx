import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useTransition } from "remix"

export function meta() {
  return { title: "Planejamento" }
}

import resetcss from "normalize.css"
import fonts from "./assets/fonts/icons.css"
import global from "./assets/global.css"
import ReactTooltip from "react-tooltip"
import { ThemeProvider } from "./components/contexts/theme"
import { SmoothScrollProvider } from "./components/contexts/scroll"
export function links() {
  return [
    { rel: "stylesheet", href: resetcss },
    { rel: "stylesheet", href: fonts },
    { rel: "stylesheet", href: global },
  ]
}

export default function App() {
  const transition = useTransition()

  return (
    <ThemeProvider>
      {/* <SmoothScrollProvider options={{ smooth: true, class: "inView" }}> */}
      <html lang="pt-BR">
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
          <ReactTooltip place="top" type="dark" effect="solid" />
        </body>
      </html>
      {/* </SmoothScrollProvider> */}
    </ThemeProvider>
  )
}
