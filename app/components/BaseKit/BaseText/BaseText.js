import React from "react"
import PropTypes from "prop-types"

const BaseText = ({ title, children, style, className, onClick, type, aria, target, href }) => {
  const CustomTag = `${type}`
  const hrefProp = type == "a" ? { href, target } : null
  return (
    <CustomTag
      className={`${className || ""}`}
      style={style}
      title={aria}
      {...hrefProp}
      onClick={() => {
        if (onClick) onClick()
      }}
    >
      {title || children}
    </CustomTag>
  )
}

BaseText.propTypes = {
  title: PropTypes.any,
  aria: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string,
  style: PropTypes.object,
}

export default BaseText
