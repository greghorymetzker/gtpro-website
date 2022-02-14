import React, { useMemo } from "react"
import { BackgroundImage, Image } from "react-image-and-background-image-fade"
import PropTypes from "prop-types"

const BaseImage = ({
  src,
  style,
  width,
  height,
  className,
  alt,
  title,
  backGroundMode = false,
  disableLoader = false,
}) => {
  const ImageComponent = useMemo(() => {
    return backGroundMode ? (
      <BackgroundImage
        className={`${className || ""}`}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          ...style,
        }}
        src={src}
        width={width}
        height={height}
        alt={alt}
        title={title}
        disableLoader={disableLoader}
      />
    ) : (
      <Image
        className={`${className || ""}`}
        style={style}
        src={src}
        width={width}
        height={height}
        alt={alt}
        title={title}
        disableLoader={disableLoader}
      />
    )
  }, [src])

  return ImageComponent
}

BaseImage.propTypes = {
  title: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.string,
  style: PropTypes.object,
  backGroundMode: PropTypes.bool,
}

export default BaseImage
