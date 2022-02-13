import ReactDOM from "react-dom"

export function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement)
}

export function createUniversalPortal(children, selector) {
  if (!canUseDOM()) {
    return null
  }
  return ReactDOM.createPortal(children, document.querySelector(selector))
}
