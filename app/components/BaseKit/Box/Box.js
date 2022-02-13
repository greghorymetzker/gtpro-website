import React, { forwardRef, useMemo } from "react"
import PropTypes from "prop-types"

const Box = forwardRef((props, ref) => {
  const { children, style, className, onClick, onMouseOver, onMouseOut, ...attrs } = props

  const getProperties = useMemo(() => {
    let {
      flexDirection,
      flex,
      alignItems,
      justifyContent,
      column,
      row,
      aCenter,
      aStart,
      aEnd,
      jCenter,
      jStart,
      jEnd,
      position = "relative",
      boxSizing = "border-box",
      ...attrs
    } = props //flex

    let flexProperties = flexDirection || flex || alignItems || justifyContent || column || row

    if (flexProperties) {
      flexProperties = {
        display: flex ? "flex" : "block",
        flex: flex ? Number(flex || 1) : "unset",
        flexDirection: flexDirection || (column && "column") || (row && "row"),
        alignItems: alignItems || (aCenter && "center") || (aStart && "flex-start") || (aEnd && "flex-end"),
        justifyContent:
          justifyContent || (jCenter && "center") || (jStart && "flex-start") || (jEnd && "flex-end"),
      }
    }

    let style = {
      position,
      boxSizing,
      ...flexProperties,
    }

    return { style, attrs }
  }, [])

  return (
    <div
      className={className}
      onClick={(e) => onClick && onClick(e)}
      onMouseOver={(e) => onMouseOver && onMouseOver(e)}
      onMouseOut={(e) => onMouseOut && onMouseOut(e)}
      ref={ref}
      style={{
        ...getProperties.style,
        ...style,
      }}
      {...getProperties.attrs}
    >
      {children}
    </div>
  )
})

Box.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string,
  flexDirection: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  onClick: PropTypes.func,
}

export default Box
