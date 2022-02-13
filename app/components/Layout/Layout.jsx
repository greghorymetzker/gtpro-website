import s from "./styles.css"
import Box from "../BaseKit/Box"
import useScroll from "../Hooks/useScroll"
import { useRef } from "react"
export const links = [{ rel: "stylesheet", href: s }]

export const Layout = ({ children, scroll = false }) => {
  const [ref] = scroll ? useScroll({ reRender: true }) : [useRef()]
  return (
    <Box
      column
      style={{
        // padding: "80px",
        paddingLeft: "70px",
        // boxSizing: "border-box",
        // paddingBottom: "10px",
      }}
      data-scroll-container
      id="scroll"
      ref={ref}
    >
      {children}
    </Box>
  )
}
