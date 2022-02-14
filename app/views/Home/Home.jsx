import { useState } from "react"
import { animated, useTransition } from "react-spring"
import LOGO from "../../assets/images/Logo.svg"
import BaseImage from "../../components/BaseKit/BaseImage/BaseImage"
import BaseText from "../../components/BaseKit/BaseText/BaseText"
import Box from "../../components/BaseKit/Box/Box"
import Icon from "../../components/BaseKit/Icon/Icon"
import Footer from "../../components/Footer/Footer"
import { Portal } from "../../components/Hooks/usePortal"
import Project from "../../components/Project/Project"
import s from "./styles.css"
export const links = [{ rel: "stylesheet", href: s }, ...Project.links, ...Footer.links]

import IMAGEDOT8 from "../../assets/images/dot8.png"
import IMAGEBUSCA from "../../assets/images/buscamilhas.png"
import IMAGEPEIXE30 from "../../assets/images/peixe.png"
import IMAGESEUINGRESSO from "../../assets/images/seuingresso.png"

export const PROJECTS = [
  {
    id: 0,
    name: "Dot8",
    slogan: "Sistema de Controle e Gestão de Ponto",

    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.",
    link: "https://dot8.com.br",
    image: IMAGEDOT8,
  },
  {
    id: 1,
    name: "Busca Milhas",
    slogan: "Buscador de Passagem com Milhas",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.",
    link: "https://buscamilhas.com",
    image: IMAGEBUSCA,
  },
  {
    id: 2,
    name: "Peixe 30",
    slogan: "Rede Social Profissional de Vídeo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.",
    link: "https://peixe30.com",
    image: IMAGEPEIXE30,
  },
  {
    id: 3,
    name: "Seu Ingresso",
    slogan: "Rede Social Profissional de Vídeo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.",
    link: "https://apps.apple.com/es/app/seu-ingresso/id1560275114",
    image: IMAGESEUINGRESSO,
  },
]
export const Home = () => {
  const [open, setOpen] = useState(PROJECTS[0])

  const transitions = useTransition(open.image, {
    from: { opacity: 0 },
    enter: { opacity: 1, position: "relative", top: 0, left: 0 },
    leave: { opacity: 0, position: "absolute", top: 0, left: 0 },
    config: { duration: 200 },
  })

  return (
    <Box column flex={1} className="fade" data-scroll>
      <Box
        row
        flex
        style={{
          padding: "60px 80px",
        }}
      >
        <Box column>
          <BaseText
            className={"home-title"}
            type="h3"
            title={
              <>
                {open.name}
                {/* <span
                  style={{
                    color: "#FF710D",
                  }}
                >
                  8
                </span> */}
              </>
            }
          ></BaseText>
          <Box className={"home-image"}>
            {transitions(
              (props, item) =>
                item && (
                  <animated.div style={{ ...props, width: "100%", height: "100%" }}>
                    <BaseImage
                      src={item}
                      backGroundMode
                      width="100%"
                      height="100%"
                      style={{
                        backgroundSize: "cover",
                      }}
                    ></BaseImage>
                  </animated.div>
                ),
            )}

            <Box
              className="home-image--over"
              style={{ position: "absolute", left: 0, top: 0 }}
              aCenter
              jCenter
              flex
            >
              <a
                href={open.link}
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
        <Box column flex className="project-side">
          <BaseText
            className={"home-title-side"}
            type="h4"
            title={
              <>
                Nossos Recentes Casos de Sucesso
                {/* <span
                  style={{
                    color: "#FF710D",
                  }}
                >
                  8
                </span> */}
              </>
            }
          ></BaseText>

          {PROJECTS?.map((e) => {
            return (
              <Project
                key={e?.id}
                changeOpen={() => {
                  setOpen(e)
                }}
                data={e}
                active={open?.id === e?.id}
              />
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}

Home.links = links
