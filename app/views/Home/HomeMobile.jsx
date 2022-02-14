import BaseText from "~/components/BaseKit/BaseText/BaseText"
import Icon from "~/components/BaseKit/Icon/Icon"
import IMAGEDOT8 from "../../assets/images/companydot8.png"
import LOGO from "../../assets/images/Logo.svg"
import Box from "../../components/BaseKit/Box/Box"
import Divider from "../../components/BaseKit/Divider/Divider"
import Footer from "../../components/Footer/Footer"
import ProjectMobile from "../../components/ProjectMobile/ProjectMobile"
import { PROJECTS } from "./Home"
import s from "./styles.css"
export const links = [{ rel: "stylesheet", href: s }, ...ProjectMobile.links, ...Footer.links]

export const Home = () => {
  return (
    <Box column flex={1} className="fade" data-scroll>
      <Box
        flex
        column
        aCenter
        jCenter
        style={{
          // height: "40vh",
          width: "100%",
          // marginBottom: "20vh",
        }}
      >
        <BaseText
          className="swipe_mobile"
          title={
            <>
              Nossos Recentes <span>Casos</span> de <span>Sucesso</span>
            </>
          }
          type="span"
        ></BaseText>
        {/* <Box
          className={"swipe_bottom"}
          column
          flex
          aCenter
          jCenter
          style={{
            position: "absolute",
          }}
        >
          DESLIZE
          <Icon name="icon-icon_arrowdown" className={"imagecompanybuttonview_icon_eyeshow"} />
        </Box> */}
        <Divider type="h" spaccing="0px" style={{ backgroundColor: "#D6D6D6" }}></Divider>
      </Box>

      <Box
        style={{
          padding: "10px",
          marginTop: "30px",
        }}
      >
        {PROJECTS.map((e, k) => {
          return <ProjectMobile data={e} key={k} />
        })}
      </Box>
      <Footer relative></Footer>
    </Box>
  )
}

Home.links = links
