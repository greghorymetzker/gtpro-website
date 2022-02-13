import React from "react"
import PropTypes from "prop-types"

import s from "./styles.css"
export const links = [{ rel: "stylesheet", href: s }]

export default function Button({
  onClick,
  style,
  title,
  el,
  type = "default",
  disabled,
  active,
  className,
  mode,
  preffix,
}) {
  const onClickFn = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <button
      className={`button ${type ? type : ""} ${active ? "active" : ""}${disabled ? "disabled" : ""} ${
        className || ""
      }`}
      style={style}
      type={mode}
      onClick={() => !disabled && onClickFn()}
    >
      {preffix}

      {type == "edit" && (
        <span>
          <i className="icon-pencil_bold" />
        </span>
      )}
      {type == "print" && (
        <span
          style={{
            fontSize: "1.2em",
          }}
        >
          <i className="icon-print_ticket_bold" />
        </span>
      )}
      {type == "organize" && (
        <span
          style={{
            fontSize: "1.2em",
          }}
        >
          <i className="icon-organzer" />
        </span>
      )}
      {title || el}

      {type == "next" && (
        <span className={"icon"}>
          {" "}
          <i className="icon-arrow_left_line" />
        </span>
      )}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  el: PropTypes.node,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  onClick: null,
  type: "default",
  disabled: false,
  active: false,
  title: null,
  el: null,
  className: null,
  preffix: null,
}

Button.links = links
