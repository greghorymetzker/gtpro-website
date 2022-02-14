import BaseText from "../BaseKit/BaseText/BaseText"
import Box from "../BaseKit/Box/Box"
import Divider from "../BaseKit/Divider/Divider"
import Icon from "../BaseKit/Icon/Icon"
import s from "./styles.css"

export const links = [{ rel: "stylesheet", href: s }]

export const Footer = ({ relative }) => {
  return (
    <div
      style={{
        position: relative ? "relative" : "fixed",
        bottom: relative ? "unset" : 0,
        left: relative ? "unset" : 0,
        width: "100%",
        backgroundColor: "#EBEBEB",
        zIndex: 2,
      }}
    >
      <Divider type="h" spaccing="0px" style={{ backgroundColor: "#D6D6D6" }}></Divider>
      <Box className={"footer"} flex="1" jCenter aCenter column>
        <Box className={"footer_buttonlinks"} flex="1" jStart aCenter row>
          <Box className={"buttonlinksdefault"} flex="1" aCenter row>
            <a href="mailto:greghorygusmao@gmail.com">
              <BaseText className={"buttonlinksdefault_whatsapp"} type="span" title={"E-mail"}></BaseText>

              <Icon name="icon-icon_arrow" className={"buttonlinksdefault_icon_arrow"} />
            </a>
          </Box>
          <Box className={"buttonlinksdefault"} flex="1" jCenter aCenter row>
            <a href="https://api.whatsapp.com/send?phone=5531982325284&text=Ol%C3%A1" target="_blank">
              <BaseText className={"buttonlinksdefault_whatsapp"} type="span" title={"Whatsapp"}></BaseText>

              <Icon name="icon-icon_arrow" className={"buttonlinksdefault_icon_arrow"} />
            </a>
          </Box>
          <Box className={"buttonlinksdefault"} flex="1" jEnd aCenter row>
            <a href="https://www.linkedin.com/company/gtproducts/about/" target="_blank">
              <BaseText className={"buttonlinksdefault_whatsapp"} type="span" title={"Linkedin"}></BaseText>

              <Icon name="icon-icon_arrow" className={"buttonlinksdefault_icon_arrow"} />
            </a>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

Footer.links = links

export default Footer
