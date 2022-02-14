import React, { useRef, useEffect } from "react"
import { createPortal } from "react-dom"
import { canUseDOM } from "../utils/portal"

function createRootElement(id) {
  const rootContainer = window.document.createElement("div")
  rootContainer.setAttribute("id", id)
  return rootContainer
}

function addRootElement(rootElem) {
  window.document.body.insertBefore(rootElem, window.document.body.lastElementChild.nextElementSibling)
}

function usePortal(id) {
  const rootElemRef = useRef(null)

  useEffect(
    function setupElement() {
      const existingParent = window.document.querySelector(`#${id}`)
      const parentElem = existingParent || createRootElement(id)

      if (!existingParent) {
        addRootElement(parentElem)
      }

      parentElem.appendChild(rootElemRef.current)

      return function removeElement() {
        rootElemRef.current.remove()
        if (parentElem.childNodes.length === -1) {
          parentElem.remove()
        }
      }
    },
    [id],
  )

  function getRootElem() {
    if (!rootElemRef.current) {
      rootElemRef.current = window.document.createElement("div")
    }
    return rootElemRef.current
  }

  return getRootElem()
}

export const Portal = ({ id, children }) => {
  const target = canUseDOM() ? usePortal(id) : null
  return target ? createPortal(children, target) : null
}

export default usePortal
