import { useEffect, useMemo, useRef, useState } from "react"
import BaseImage from "../BaseKit/BaseImage/BaseImage"
import BaseText from "../BaseKit/BaseText/BaseText"
import Box from "../BaseKit/Box/Box"
import Divider from "../BaseKit/Divider/Divider"
import Icon from "../BaseKit/Icon/Icon"
import ModalPortal from "../Modal/ModalPortal"
import { Gantt, ViewMode } from "gantt-task-react"
import sg from "gantt-task-react/dist/index.css"
import s from "./styles.css"
import { links as stylesModal } from "../Modal/ModalPortal"
export const links = [
  { rel: "stylesheet", href: s },
  {
    rel: "stylesheet",
    href: sg,
  },
  ...stylesModal,
]

export const Card = ({ data }) => {
  const [openGantt, setOpenGantt] = useState(false)
  const currentDate = new Date()
  const labels = useMemo(() => {
    return data?.labels?.map((e, k) => {
      let color = e.color.toLowerCase()
      return (
        <Box
          className={"typetask"}
          justifyContent="center"
          flexDirection="row"
          key={Math.random()}
          style={{
            backgroundColor: color == "sky" ? "cornflowerblue" : `${color}`,
          }}
        >
          <BaseText className={"typetask_inovao"} type="span" title={e.name}></BaseText>
        </Box>
      )
    })
  }, [])

  return (
    <Box className={"card"} flexDirection="row">
      <Box className={"card_infocard"} alignItems="center" flexDirection="column">
        <Box className={"card_header"} flexDirection="column">
          <Box className={"card_tags"} flexDirection="row" alignItems="center" justifyContent="center">
            <Box flexDirection="row" flex={1} alignItems="center">
              {labels}
            </Box>
            <Box flexDirection="row">
              {data?.members.map((e, k) => {
                return (
                  <span
                    style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "100px",
                      marginRight: "5px",
                      overflow: "hidden",
                    }}
                    key={Math.random()}
                    data-tip={e?.name}
                  >
                    <BaseImage src={e?.avatar} width="18px" height="18px" />
                  </span>
                )
              })}
            </Box>
          </Box>

          <BaseText
            className={"card_reconstruoregistrocorreodeponto"}
            type="span"
            title={data?.name}
          ></BaseText>
        </Box>

        <Box className={"card_info"} alignItems="center" flexDirection="row">
          <Box className={"card_deadline"} alignItems="center" flexDirection="row">
            <Icon name="icon-icon_calendar1" />
            <span data-tip={"Previsão"}>
              <BaseText className={"card_"} type="span" title={data?.dateDeadLine}></BaseText>
            </span>
          </Box>

          <Box
            className={"card_priority"}
            alignItems="center"
            flexDirection="row"
            onClick={() => {
              setOpenGantt(true)
            }}
          >
            <Icon name="icon-icon_alert" />

            <BaseText className={"card_baixa"} type="span" title={"Abrir Gantt"}></BaseText>
          </Box>
          <Box className={"card_priority"} alignItems="center" flexDirection="row">
            <Icon name="icon-icon_alert" />

            <BaseText
              className={"card_baixa"}
              type="span"
              title={data?.priority || "Não Informado"}
            ></BaseText>
          </Box>

          <a href={data?.url} className={"card_trello"} target="_blank">
            <Icon name="icon-icon_trello" />

            <BaseText className={"card_cardtrello"} type="span" title={"Card Trello"}></BaseText>
          </a>
        </Box>
      </Box>
      <ModalPortal
        styleInner={{ width: "60vw" }}
        isOpen={openGantt}
        onRequestClose={() => {
          setOpenGantt(false)
        }}
        style={{
          padding: "0px",
        }}
      >
        <Gantt
          locale="pt-BR"
          tasks={[
            {
              start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
              end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
              name: "Novo monitaramento",
              id: "ProjectSample",
              progress: 100,
              type: "project",

              hideChildren: false,
            },
            {
              start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
              end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2, 12, 28),
              name: "Escopagem",
              id: "Task 0",
              progress: 45,
              type: "task",
              project: "ProjectSample",
            },
            {
              start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
              end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
              name: "Planejamento",
              id: "Task 1",
              progress: 25,
              dependencies: ["Task 0"],
              type: "task",
              project: "ProjectSample",
            },
            {
              start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
              end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
              name: "Desenvolvimento",
              id: "Task 2",
              progress: 10,
              dependencies: ["Task 1"],
              type: "task",
              project: "ProjectSample",
            },
            {
              start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
              end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
              name: "Homologação",
              id: "Task 3",
              progress: 2,
              dependencies: ["Task 2"],
              type: "task",
              project: "ProjectSample",
            },
            {
              start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
              end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
              name: "Retificações",
              id: "Task 4",
              type: "task",
              progress: 70,
              dependencies: ["Task 2"],
              project: "ProjectSample",
            },
            {
              start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
              end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
              name: "Produção",
              id: "Task 6",
              progress: currentDate.getMonth(),
              type: "milestone",
              dependencies: ["Task 4"],
              project: "ProjectSample",
            },
          ]}
          viewMode={ViewMode.Day}
          listCellWidth={""}
        />
      </ModalPortal>
    </Box>
  )
}

export const ColumnCards = ({ data, style }) => {
  const dataFiltered = useMemo(() => {
    let finish = []
    let process = []
    process = data?.data?.process?.map((e) => {
      return <Card data={e} key={e.id}></Card>
    })
    finish = data?.data?.finish?.map((e) => {
      return <Card data={e} key={e.id}></Card>
    })

    return { finish, process }
  }, [data])
  return (
    <Box className={"inovation"} style={style} flexDirection="column">
      <Box className={"inovation_headerlist"} flexDirection="row">
        <Box
          className={"inovation_title"}
          style={{
            width: "100%",
          }}
          flexDirection="row"
        >
          <BaseText className={"inovation_inovao"} type="span" title={data?.emoji}></BaseText>

          <BaseText className={"inovation_inovao"} type="span" title={data?.title}></BaseText>
        </Box>

        <Box className={"inovation_number"} flexDirection="row">
          <BaseText
            className={"inovation_total"}
            type="span"
            title={data?.data?.finish?.length + data?.data?.process?.length}
          ></BaseText>
        </Box>
      </Box>
      <Divider type="h" spaccing="0px" style={{ backgroundColor: "#EBEBED" }}></Divider>

      <Box className={"inovation_ctn"}>
        <Box className={"inovation_inprocess"} flexDirection="column">
          <BaseText className={"inovation_emprocesso"} type="span" title={"EM PROCESSO"}></BaseText>
          <div>{dataFiltered?.process}</div>
        </Box>

        <Divider type="h" spaccing="0px" style={{ backgroundColor: "#EBEBED" }}></Divider>

        <Box className={"inovation_completed"} flexDirection="column">
          <BaseText className={"inovation_concluidos"} type="span" title={"CONCLUIDOS"}></BaseText>
          <div>{dataFiltered?.finish}</div>
        </Box>
      </Box>
    </Box>
  )
}
