import React, { createContext, useEffect, useState } from "react"

export const SmoothScrollContext = createContext({
  scroll: null,
})

export const SmoothScrollProvider = ({ children, options }) => {
  const [scroll, setScroll] = useState(null)

  const scrollCalling = async () => {
    try {
      const LocomotiveScroll = (await import("locomotive-scroll")).default
      setScroll(
        new LocomotiveScroll({
          el: document.querySelector("[data-scroll-container]") || undefined,
          // smoothMobile: true,
          ...options,
        }),
      )
    } catch (error) {
      throw Error(`[SmoothScrollProvider]: ${error}`)
    }
  }
  useEffect(() => {
    if (!scroll) {
      scrollCalling()
    }

    return () => {
      scroll && scroll.destroy()
    }
  }, [scroll]) // eslint-disable-line react-hooks/exhaustive-deps

  return <SmoothScrollContext.Provider value={{ scroll }}>{children}</SmoothScrollContext.Provider>
}

SmoothScrollContext.displayName = "SmoothScrollContext"
SmoothScrollProvider.displayName = "SmoothScrollProvider"
