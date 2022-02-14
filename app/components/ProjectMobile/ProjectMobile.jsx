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
        <BaseText
          className={"dot_dot"}
          type="span"
          title={
            <>
              {data.name.split("|")[0]}
              <span
                style={{
                  color: "#FF710D",
                }}
              >
                {data.name.split("|")[1]}
              </span>
            </>
          }
        ></BaseText>
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

          <BaseText className={"infocompany_title"} type="span" title={"OBJETIVOS"}></BaseText>
          <BaseText
            className={"infocompany_description"}
            type="span"
            title={data.meta}
            style={{
              marginBottom: "20px",
            }}
          ></BaseText>
          <BaseText className={"infocompany_title"} type="span" title={"RESULTADOS"}></BaseText>
          <BaseText className={"infocompany_description"} type="span" title={data.result}></BaseText>
        </Box>

        <Box className={"dot_ctngreg_thaka"} flex="1" alignItems="flex-start" column>
          <a href={data.responsible[0].link} target="_blank">
            <Box className={"dot_user"} flex="1" flexDirection="row">
              <BaseImage src={data.responsible[0].image} width="26px" height="26px" />
              <BaseText type="span" title={data.responsible[0].title}></BaseText>
            </Box>
          </a>

          <Divider type="h" spaccing="10px" style={{ backgroundColor: "#D6D6D6" }}></Divider>
          <a href={data.responsible[1].link} target="_blank">
            <Box className={"dot_user"} flex="1" flexDirection="row">
              <BaseImage src={data.responsible[1].image} width="26px" height="26px" />
              <BaseText type="span" title={data.responsible[1].title}></BaseText>
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
