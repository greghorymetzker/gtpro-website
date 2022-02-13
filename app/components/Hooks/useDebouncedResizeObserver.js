import { useState, useMemo } from "react"
import useResizeObserver from "use-resize-observer"
import debounce from "lodash.debounce"

const useDebouncedResizeObserver = (wait) => {
  const [size, setSize] = useState({})
  const onResize = useMemo(() => debounce(setSize, wait, { leading: true }), [wait])
  const { ref } = useResizeObserver({ onResize })

  return { ref, ...size }
}

export default useDebouncedResizeObserver
