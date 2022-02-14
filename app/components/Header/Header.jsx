import s from "./styles.css"
import LOGO from "../../assets/images/Logo.svg"

import Box from "../../components/BaseKit/Box/Box"

import Divider from "../../components/BaseKit/Divider/Divider"
import BaseImage from "../BaseKit/BaseImage/BaseImage"

export const links = [{ rel: "stylesheet", href: s }]

export const Header = (props) => {
  return (
    <Box
      style={{
        backgroundColor: "#EBEBEB",
        zIndex: 2,
      }}
    >
      <Box
        flex
        column
        aCenter
        jCenter
        style={{
          padding: "14px",
          height: "48px",
          minHeight: "48px",
        }}
      >
        <BaseImage
          src={LOGO}
          style={{
            width: "68px",
          }}
        ></BaseImage>
      </Box>
      <Divider type="h" spaccing="0px" style={{ backgroundColor: "#D6D6D6" }}></Divider>
    </Box>
  )
}

Header.links = links

export default Header
