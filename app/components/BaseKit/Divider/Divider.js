import PropTypes from "prop-types"
import React from "react"

const Divider = ({ type, spaccing, variant, style, size = 1 }) => {
  let dotted = {}

  dotted =
    variant == "dotted"
      ? {
          backgroundimage: `-webkit-linear-gradient(right, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 51%,rgba(255,255,255,0) 100%),
                            -webkit-linear-gradient(bottom, rgba(128,128,128,1) 0%, rgba(128,128,128,0) 8%, rgba(128,128,128,0) 100%)`,
          backgroundSize: "12px 24px",
        }
      : {}

  return (
    <div
      style={{
        margin: type == "h" ? `${spaccing} 0px` : `0px ${spaccing}`,
        minWidth: type == "h" ? `100%` : `${size}px`,
        minHeight: type == "h" ? `${size}px` : `100%`,
        ...dotted,
        ...style,
      }}
    />
  )
}

Divider.defaultProps = {
  variant: "solid",
}

Divider.propTypes = {
  type: PropTypes.string,
  spaccing: PropTypes.string,
  variant: PropTypes.string,
}

export default Divider
