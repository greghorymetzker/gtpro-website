import { useState } from "react"
import { animated, useTransition } from "react-spring"
import IMAGEBUSCA from "../../assets/images/buscamilhas.png"
import IMAGEDOT8 from "../../assets/images/dot8.png"
import GREG from "../../assets/images/greg.png"
import IMAGEPEIXE30 from "../../assets/images/peixe.png"
import IMAGESEUINGRESSO from "../../assets/images/seuingresso.png"
import THAK from "../../assets/images/thaka.png"
import BaseImage from "../../components/BaseKit/BaseImage/BaseImage"
import BaseText from "../../components/BaseKit/BaseText/BaseText"
import Box from "../../components/BaseKit/Box/Box"
import Divider from "../../components/BaseKit/Divider/Divider"
import Icon from "../../components/BaseKit/Icon/Icon"
import Footer from "../../components/Footer/Footer"
import Project from "../../components/Project/Project"
import s from "./styles.css"
export const links = [{ rel: "stylesheet", href: s }, ...Project.links, ...Footer.links]

export const PROJECTS = [
  {
    id: 0,
    name: "DOT|8",
    slogan: "Sistema de Controle e Gestão de Ponto",
    meta: "Remodelar a plataforma preexistente, construir a estrutura organizacional, recrutar e capacitar colaboradores, instaurar processos ágeis para aumentar a base de clientes, criar novos produtos.",
    result:
      "Lideramos e formamos um ordenamento estratégico/criativo em todos os ambientes do negócio. Sendo assim, atuamos diretamente na edificação do ciclo de vida do produto, desde o entendimento de todas as interfaces do problema, a preparação da equipe, até o lançamento, monitoramento e medição dos indicadores. Durante o processo, nos mantivemos alinhados aos interesses dos stakeholders, estabelecendo uma comunicação acessível e coerente, a fim de permanecermos em consonância quanto às visões estratégicas e prioridades do projeto. Dentre os resultados alcançados, em menos de um ano, construímos um aplicativo robusto, com sistemas internos escaláveis; obtivemos um crescimento financeiro de mais de 600% e estruturamos equipes coordenadas e autogerenciadas.",
    link: "https://dot8.com.br",
    image: IMAGEDOT8,
    responsible: [
      {
        image: GREG,
        title: "Product Manager & Product Designer",
        link: "https://www.linkedin.com/in/greghorymetzker",
      },
      {
        image: THAK,
        title: "Tech Lead & Dev Full Stack",
        link: "https://www.linkedin.com/in/tharyck-gusm%C3%A3o-metzker-6361251a9/",
      },
    ],
  },
  {
    id: 1,
    name: "Busca |Milhas",
    slogan: "Buscador de Passagem com Milhas",
    meta: "Organizar os setores operacionais, remodelar e criar novos features para o produto, aplicar metodologias ágeis e aumentar o faturamento.",
    result:
      "Reestruturamos a dinâmica operacional do produto e construímos um Design System consistente por meio de metodologias ágeis que conectavam o backlog  à equipe de desenvolvimento. Por conseguinte, obtivemos como resultado uma plataforma com estrutura sólida, componentes autoajustáveis e crescimento financeiro de mais de 50% em menos de 6 meses.",

    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.",
    link: "https://buscamilhas.com",
    image: IMAGEBUSCA,
    responsible: [
      {
        image: GREG,
        title: "Product Manager & Product Designer",
        link: "https://www.linkedin.com/in/greghorymetzker",
      },
      {
        image: THAK,
        title: "Tech Lead & Dev Full Stack",
        link: "https://www.linkedin.com/in/tharyck-gusm%C3%A3o-metzker-6361251a9/",
      },
    ],
  },
  {
    id: 2,
    name: "Peixe |30",
    slogan: "Rede Social Profissional de Vídeo",
    meta: "Reestruturar a plataforma preexistente, criação e formação dos setores, recrutar e capacitar colaboradores, instaurar processos ágeis para aumentar a base de clientes.",
    result:
      "Planejamos e criamos o visual do produto por meio do desenvolvimento de um sistema de design robusto para Web e Mobile e das práxis de arquitetura Cloud. Durante a criação do projeto, utilizamos técnicas de UX Design, UX Writing, User Research, Discovery, React Native, ReDux Sagas e Microsserviços.",

    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.",
    link: "https://peixe30.com",
    image: IMAGEPEIXE30,
    responsible: [
      {
        image: GREG,
        title: "Product Designer",
        link: "https://www.linkedin.com/in/greghorymetzker",
      },
      {
        image: THAK,
        title: "Dev Full Stack",
        link: "https://www.linkedin.com/in/tharyck-gusm%C3%A3o-metzker-6361251a9/",
      },
    ],
  },
  {
    id: 3,
    name: "Seu |Ingresso",
    slogan: "Rede Social Profissional de Vídeo",
    meta: "Desenvolver uma plataforma  Web e Mobile destinada à criação, organização e gestão de eventos para organizadores.",
    result:
      "Projetamos e elaboramos o visual do produto por meio do desenvolvimento de um sistema de design robusto para Web e Mobile e das práxis de arquitetura Cloud. Durante a criação do projeto, utilizamos técnicas de UX Design, UX Writing, User Research, Discovery, React Native, ReDux Sagas e Microsserviços.",

    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.",
    link: "https://apps.apple.com/es/app/seu-ingresso/id1560275114",
    image: IMAGESEUINGRESSO,
    responsible: [
      {
        image: GREG,
        title: "Product Designer",
        link: "https://www.linkedin.com/in/greghorymetzker",
      },
      {
        image: THAK,
        title: "Dev Full Stack",
        link: "https://www.linkedin.com/in/tharyck-gusm%C3%A3o-metzker-6361251a9/",
      },
    ],
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
          marginBottom: "60px",
        }}
      >
        <Box column>
          <BaseText
            className={"home-title"}
            type="h3"
            title={
              <>
                {open.name.split("|")[0]}
                <span
                  style={{
                    color: "#FF710D",
                  }}
                >
                  {open.name.split("|")[1]}
                </span>
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

          <Divider type="h" spaccing="0px" style={{ backgroundColor: "#D6D6D6" }}></Divider>
          <Box
            style={{
              marginBottom: "30px",
            }}
          ></Box>

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
