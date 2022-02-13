import { default as React, useEffect, useRef } from "react"
import { animated, useSpring, useTransition } from "react-spring"
import { createUniversalPortal } from "../utils/portal"
import Box from "../BaseKit/Box/Box"
import s from "./styles.css"
export const links = [{ rel: "stylesheet", href: s }]
const Modal = ({
  isOpen,
  onRequestClose,
  children,
  style,
  styleInner,
  inline,
  color,
  title,
  icon,
  center,
  styleBg,
  header,
}) => {
  const content = useRef(null)

  useEffect(() => {
    if (isOpen) {
      focusContent()
    }
  }, [isOpen])

  const focusContent = () => {
    content.current && content.current.focus()
  }

  const requestClose = (event) => {
    onRequestClose && onRequestClose(event)
  }

  const transition = useTransition(isOpen, {
    from: {
      opacity: 0,
      transform: center ? "translateY(20px)" : "translate(0%, -34%)",
    },
    enter: {
      opacity: 1,
      transform: center ? "translateY(0px)" : "translate(0%, -50%)",
    },
    leave: {
      opacity: 0,
      transform: center ? "translateY(-20px)" : "translate(0%, -34%)",
    },
  })
  console.log(transition)
  const opacity = useSpring({
    opacity: isOpen ? 1 : 0,
  })

  return transition(
    (props, item) =>
      item && (
        <div className={"modalctn"}>
          <animated.div
            onClick={requestClose}
            className={"offset"}
            style={{
              ...opacity,
              ...styleBg,
            }}
          />

          <animated.div
            className={"ctn"}
            color={color}
            style={{
              ...style,
              ...props,
              ...opacity,
            }}
          >
            <Box
              flexDirection="column"
              color={color}
              style={styleInner}
              className={inline ? "modalcontent" : ""}
            >
              {children}
            </Box>
          </animated.div>
        </div>
      ),
  )
}

const ModalPortal = (props) => createUniversalPortal(<Modal {...props} />, "body")

export default ModalPortal
