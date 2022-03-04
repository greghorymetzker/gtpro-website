import logodot8 from "../../../assets/images/logo.svg"
import logobuscamilhas from "../../../assets/images/LOGO.png"
import BaseImage from "../../BaseKit/BaseImage/BaseImage"
import Box from "../../BaseKit/Box/Box"
import Divider from "../../BaseKit/Divider/Divider"
import { LinkNavigation, links as LinkNavigationStyles } from "../LinkNavigation/LinkNavigation"
import s from "./styles.css"
import { useTheme } from "../../contexts/theme"
export const links = [{ rel: "stylesheet", href: s }, ...LinkNavigationStyles]
const logos = {
  buscamilhas: logobuscamilhas,
  dot8: logodot8,
}

export const LeftNavbar = ({ props }) => {
  const [theme] = useTheme()

  return (
    <Box
      className={"leftnavbar"}
      row
      position="fixed"
      data-scroll
      data-scroll-sticky
      data-scroll-target="#scroll"
    >
      <Box className={"leftnavbar_ctn"} flex aCenter column>
        <Box className={"leftnavbar_ctn_nav"} flex="1" column>
          <BaseImage
            width="30px"
            height="30px"
            src={logos[theme]}
            style={{
              minWidth: "30px",
              minHeight: "30px",
            }}
          />
          <Box className={"leftnavbar_ctn_links"} flex column>
            <LinkNavigation icon="icon-icon_code" />
          </Box>
        </Box>

        {/* // <Icon  className={"leftnavbar_icon_logout"} /> */}
      </Box>

      <Divider type="v" spaccing="0px" style={{ backgroundColor: "#EBEBED" }}></Divider>
    </Box>
  )
}

export default LeftNavbar
