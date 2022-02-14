import s from "./styles.css"
import Box from "../BaseKit/Box"
import useScroll from "../Hooks/useScroll"
import { useRef } from "react"
import BG from "../../assets/images/Circle.png"
import BGMOBILE from "../../assets/images/Elements.png"

export const links = [{ rel: "stylesheet", href: s }]

export const Layout = ({ mobile, children, scroll = false }) => {
  const [ref] = scroll ? useScroll({ reRender: true }) : [useRef()]
  return (
    <Box
      column
      data-scroll-container
      id="scroll"
      ref={ref}
      style={{
        background: `url('${mobile ? BGMOBILE : BG}')`,
        backgroundColor: "#EBEBEB",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Box column className="layout">
        {children}
      </Box>
    </Box>
  )
}

Layout.links = links
