import PropTypes from "prop-types"
import React from "react"
import styles from "./styles.css"

export const links = [{ rel: "stylesheet", href: styles }]

const LabelInput = ({ title, style }) => {
  return (
    <span className={"title"} style={style}>
      {title}
    </span>
  )
}

LabelInput.propTypes = {
  style: PropTypes.object,
}

LabelInput.links = links

export default LabelInput
