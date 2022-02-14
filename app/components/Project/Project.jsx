import { useCallback, useEffect, useState } from "react"
import BaseText from "../BaseKit/BaseText/BaseText"
import Box from "../BaseKit/Box/Box"
import Divider from "../BaseKit/Divider/Divider"
import Icon from "../BaseKit/Icon/Icon"
import s from "./styles.css"
import clsx from "clsx"
import { useTransitionHeight } from "../Hooks/useMeasure"
import { animated } from "react-spring"
import GREG from "../../assets/images/greg.png"
import THAK from "../../assets/images/tha.png"
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
        <BaseText className={"companyinfodefault_namecompany"} type="span" title={data?.name}></BaseText>

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
            <BaseText className={"infocompany_description"} type="span" title={data.description}></BaseText>

            <Box className={"infocompany_greg_thaka"} column flex>
              <Box className={"infocompany_ctngreg_thaka"} flex="1" justifyContent="flex-start" row>
                <a href="https://www.linkedin.com/in/greghorymetzker/" target="_blank">
                  <Box className={"infocompany_user"} row flex="unset" aCenter>
                    <BaseImage src={GREG} width="20px" height="20px" />

                    <BaseText
                      className={"infocompany_slogan"}
                      type="span"
                      title={"Product Manager & Product Designer"}
                    ></BaseText>
                  </Box>
                </a>
                <Divider
                  type="v"
                  spaccing="30px"
                  style={{ backgroundColor: "#D6D6D6", height: "10px" }}
                ></Divider>
                <a href="https://www.linkedin.com/in/tharyck-gusm%C3%A3o-metzker-6361251a9/" target="_blank">
                  <Box className={"infocompany_user"} row flex="unset" aCenter>
                    <BaseImage src={THAK} width="20px" height="20px" />
                    <BaseText
                      className={"infocompany_slogan"}
                      type="span"
                      title={"Tech Lead & Dev Full Stack"}
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