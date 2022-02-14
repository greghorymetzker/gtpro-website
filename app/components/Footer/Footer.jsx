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
            <BaseText className={"buttonlinksdefault_whatsapp"} type="span" title={"E-mail"}></BaseText>

            <Icon name="icon-icon_arrow" className={"buttonlinksdefault_icon_arrow"} />
          </Box>
          <Box className={"buttonlinksdefault"} flex="1" jCenter aCenter row>
            <BaseText className={"buttonlinksdefault_whatsapp"} type="span" title={"Whatsapp"}></BaseText>

            <Icon name="icon-icon_arrow" className={"buttonlinksdefault_icon_arrow"} />
          </Box>
          <Box className={"buttonlinksdefault"} flex="1" jEnd aCenter row>
            <BaseText className={"buttonlinksdefault_whatsapp"} type="span" title={"Linkedin"}></BaseText>

            <Icon name="icon-icon_arrow" className={"buttonlinksdefault_icon_arrow"} />
          </Box>
        </Box>
      </Box>
    </div>
  )
}

Footer.links = links

export default Footer
