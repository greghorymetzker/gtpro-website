import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router"
import { SmoothScrollContext } from "../contexts/scroll"
import useDebouncedResizeObserver from "../Hooks/useDebouncedResizeObserver"
export const useScroll = ({ reRender = false }) => {
  const { scroll } = useContext(SmoothScrollContext)
  const { pathname } = useLocation()
  const { ref, height } = useDebouncedResizeObserver(200)
  const [render, setrender] = useState(0)

  const goTo = (ind) => {
    if (ref?.current) {
      scroll && scroll.scrollTo(ref?.current?.children?.[ind], -120)
    }
  }

  useEffect(() => {
    if (render) {
      scroll &&
        scroll?.scrollTo(0, {
          duration: 0,
          disableLerp: true,
        })
      scroll && scroll?.update()
      scroll && scroll?.resetScrollBar()
    }
  }, [pathname])
  useEffect(() => {
    // if (!render) {
    scroll && scroll?.update()
    // }
  }, [height])

  useEffect(() => {
    if (!render) {
      scroll &&
        scroll?.scrollTo(0, {
          duration: 0,
          disableLerp: true,
        })
      scroll && setrender(render + 1)
    }
  }, [height])

  return [ref, goTo]
}

export default useScroll
