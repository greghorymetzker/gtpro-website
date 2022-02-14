import { useCallback, useEffect, useState } from "react"
import BaseText from "../BaseKit/BaseText/BaseText"
import Box from "../BaseKit/Box/Box"
import Divider from "../BaseKit/Divider/Divider"
import Icon from "../BaseKit/Icon/Icon"
import s from "./styles.css"
import clsx from "clsx"
import { useTransitionHeight } from "../Hooks/useMeasure"
import { animated } from "react-spring"
import BaseImage from "../BaseKit/BaseImage/BaseImage"
export const links = [{ rel: "stylesheet", href: s }]

export const Project = ({ active, data, changeOpen }) => {
  const [hAnimated, bind, toggle, changeState] = useTransitionHeight(false, 0)

  const [, updateState] = useState()
  const forceUpdate = useCallback(() => updateState({}), [])
  useEffect(() => {
    changeState(active)
  }, [active])

  return (
    <Box
      className={clsx("companyinfodefault", active && "active")}
      column
      onClick={() => {
        changeOpen()
        forceUpdate()
      }}
    >
      <Box className={"companyinfodefault_company_slogan"} flex="1" aCenter row>
        <BaseText
          className={"companyinfodefault_namecompany"}
          type="span"
          title={data?.name.replace("|", "")}
        ></BaseText>

        <BaseText className={"companyinfodefault_slogan"} type="span" title={data?.slogan}></BaseText>

        <Icon name="icon-icon_arrow" className={"companyinfodefault_icon_arrow"} />
      </Box>
      <animated.div
        style={{
          flexDirection: "column",
          display: "flex",
          ...hAnimated,
          overflow: "hidden",
        }}
      >
        <div {...bind}>
          <Box className={"infocompany"} column flex>
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

            <Box className={"infocompany_greg_thaka"} column flex>
              <Box className={"infocompany_ctngreg_thaka"} flex="1" justifyContent="flex-start" row>
                <a href={data.responsible[0].link} target="_blank">
                  <Box className={"infocompany_user"} row flex="unset" aCenter>
                    <BaseImage src={data.responsible[0].image} width="20px" height="20px" />

                    <BaseText
                      className={"infocompany_slogan"}
                      type="span"
                      title={data.responsible[0].title}
                    ></BaseText>
                  </Box>
                </a>
                <Divider
                  type="v"
                  spaccing="30px"
                  style={{ backgroundColor: "#D6D6D6", height: "10px" }}
                ></Divider>
                <a href={data.responsible[1].link} target="_blank">
                  <Box className={"infocompany_user"} row flex="unset" aCenter>
                    <BaseImage src={data.responsible[1].image} width="20px" height="20px" />

                    <BaseText
                      className={"infocompany_slogan"}
                      type="span"
                      title={data.responsible[1].title}
                    ></BaseText>
                  </Box>
                </a>
              </Box>
            </Box>
          </Box>
        </div>
      </animated.div>

      <Divider type="h" spaccing="0px" style={{ backgroundColor: "#D6D6D6" }}></Divider>
    </Box>
  )
}

Project.links = links

export default Project
