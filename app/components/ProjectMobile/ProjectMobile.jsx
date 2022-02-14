import BaseText from "../BaseKit/BaseText/BaseText"
import Box from "../BaseKit/Box/Box"
import Divider from "../BaseKit/Divider/Divider"
import s from "./styles.css"
import GREG from "../../assets/images/greg.png"
import THAK from "../../assets/images/tha.png"
import BaseImage from "../BaseKit/BaseImage/BaseImage"
import Icon from "../BaseKit/Icon/Icon"
export const links = [{ rel: "stylesheet", href: s }]

export const ProjectMobile = ({ data }) => {
  return (
    <Box className={"dot"} flex="1" colum>
      <Box className={"dot_header"} flex="1" column>
        <BaseText className={"dot_dot"} type="span" title={data.name}></BaseText>
        <Box className="image-mobile">
          <BaseImage
            src={data.image}
            backGroundMode
            width="100%"
            height="252px"
            style={{
              backgroundSize: "cover",
            }}
          ></BaseImage>

          <Box
            className="home-image--over"
            style={{ position: "absolute", left: 0, top: 0 }}
            aCenter
            jCenter
            flex
          >
            <a
              href={data.link}
              target={"_blank"}
              style={{
                textDecoration: "none",
              }}
            >
              <Box
                className={"imagecompanybuttonview"}
                flex="1"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <Box
                  className={"imagecompanybuttonview_label_icon"}
                  flex="1"
                  justifyContent="flex-end"
                  alignItems="center"
                  flexDirection="row"
                >
                  <Icon name="icon-icon_eyeshow" className={"imagecompanybuttonview_icon_eyeshow"} />

                  <BaseText
                    className={"imagecompanybuttonview_conheaoprojeto"}
                    type="span"
                    title={"Conheça o Projeto"}
                  ></BaseText>
                </Box>
              </Box>
            </a>
          </Box>
        </Box>
      </Box>
      <Box className={"dot_ctninfocompany"} flex="1" column>
        <Box className={"dot_frame"} flex="1" column>
          <BaseText className={"dot_slogan"} type="span" title={data.slogan}></BaseText>

          <BaseText className={"dot_description"} type="span" title={data.description}></BaseText>
        </Box>

        <Box className={"dot_ctngreg_thaka"} flex="1" alignItems="flex-start" column>
          <a href="https://www.linkedin.com/in/greghorymetzker/" target="_blank">
            <Box className={"dot_user"} flex="1" flexDirection="row">
              <BaseImage src={GREG} width="20px" height="20px" />
              <BaseText type="span" title={"Product Manager & Product Designer"}></BaseText>
            </Box>
          </a>

          <Divider type="h" spaccing="10px" style={{ backgroundColor: "#D6D6D6" }}></Divider>
          <a href="https://www.linkedin.com/in/tharyck-gusm%C3%A3o-metzker-6361251a9/" target="_blank">
            <Box className={"dot_user"} flex="1" flexDirection="row">
              <BaseImage src={THAK} width="20px" height="20px" />

              <BaseText type="span" title={"Tech Lead & Dev Full Stack"}></BaseText>
            </Box>
          </a>
        </Box>
      </Box>
      <Divider type="h" spaccing="60px" style={{ backgroundColor: "#D6D6D6" }}></Divider>
    </Box>
  )
}

ProjectMobile.links = links

export default ProjectMobile
