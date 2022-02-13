import PropTypes from "prop-types"
import React from "react"
import { animated, useTransition } from "react-spring"
import styles from "./styles.css"
export const links = [{ rel: "stylesheet", href: styles }]

const Loading = ({ loading, text, style, styleInner }) => {
  const opacity = useTransition(loading, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  return opacity(
    (props, item) =>
      item && (
        <animated.div className={"loading-ctn"} style={{ ...props, ...styleInner }}>
          <div className={"content"} style={style}>
            <div className={"sk_three_bounce"}>
              <div className={`sk_bounce_1 sk_child`} />
              <div className={`sk_bounce_2 sk_child`} />
              <div className={`sk_bounce_3  sk_child`} />
            </div>
            <span>{text}</span>
          </div>
        </animated.div>
      ),
  )
}

Loading.propTypes = {
  text: PropTypes.string,
}
Loading.links = links
export default Loading
