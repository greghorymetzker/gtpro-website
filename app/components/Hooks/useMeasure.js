import { useRef, useState, useEffect } from "react"
import ResizeObserver from "resize-observer-polyfill"
import { useSpring } from "react-spring"

export default function useMeasure() {
  const ref = useRef()
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 })
  const [ro] = useState(() => new ResizeObserver(([entry]) => set(entry.contentRect)))
  useEffect(() => ro.observe(ref.current), [])
  // useEffect(() => (ro.observe(ref.current), ro.disconnect), []);
  return [{ ref }, bounds]
}

export function usePrevious(value) {
  const ref = useRef()
  useEffect(() => void (ref.current = value), [value])
  return ref.current
}

export function useTransitionHeight(initialValue = false, collpase = 0) {
  const [active, toggle] = useState(initialValue)
  const previous = usePrevious(active)
  const [bind, { height: viewHeight }] = useMeasure()
  const { height } = useSpring({
    from: { height: collpase },
    to: { height: active ? viewHeight : collpase },
  })

  return [
    {
      height,
      overflow: "hidden",
    },
    bind,
    () => toggle(!active),
    (active) => {
      toggle(active)
    },
    viewHeight,
    previous,
  ]
}
