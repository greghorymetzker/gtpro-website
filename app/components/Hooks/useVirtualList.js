import { useCallback, useEffect, useRef, useState } from "react"
import { useVirtual } from "react-virtual"
import { canUseDOM } from "../utils/portal"
import useRequest from "./useRequest"

export const useVirtualList = ({ ref, size, items = [], service, cursorItems }) => {
  const parentRef = ref
  const [cursor, setCursor] = useState(cursorItems)
  const [itemsInner, setItemsInner] = useState(items)

  const rowVirtualizer = useVirtual({
    size: cursor?.hasNextPage ? itemsInner?.length + 1 : itemsInner?.length,
    parentRef: parentRef || { current: null },
    estimateSize: useCallback(() => size, []),
  })

  const [{ data, isLoading, isFetched, isError }, request] = useRequest({
    error: true,
    public: false,
    errorMessage: "Algo deu Errado!",
    successMessage: null,
    success: false,
  })

  useEffect(() => {
    const [lastItem] = [...rowVirtualizer.virtualItems].reverse()

    if (!lastItem) {
      return
    }

    if (lastItem.index === itemsInner.length - 1 && cursor?.hasNextPage && !isLoading) {
      request(service(cursor), (err, dt) => {
        if (!err) {
          setItemsInner(...dt?.data?.edges)
          setCursor(dt?.data?.pageInfo)
        }
      })
    }
  }, [isLoading, rowVirtualizer.virtualItems])

  return [isLoading, rowVirtualizer, itemsInner]
}
