import PropTypes from "prop-types"
import React from "react"
import style from "./Icon.css"

const Icon = ({ style, name, className = "", onClick }) => {
  return (
    <i
      className={`icon ${name} ${className || ""}`}
      onClick={(e) => {
        if (onClick) {
          onClick(e)
        }
      }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    />
  )
}

Icon.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default Icon
