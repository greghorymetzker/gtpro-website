import { useRef } from "react"
import Box from "~/components/BaseKit/Box/Box"
import { useVirtualList } from "~/components/Hooks/useVirtualList"
import s from "./styles.css"
export const links = [{ rel: "stylesheet", href: s }]

export const Items = ({ element, service, items, height = "70vh", size = 40 }) => {
  const parentRef = useRef(null)
  const [isLoading, rowVirtualizer, itemsInner] = useVirtualList({
    service,
    size,
    items: items?.edges,
    cursorItems: items?.pageInfo,
    ref: parentRef,
  })

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {/* {items.length == 0 && <NotFound title="Nenhum Evento Encontrado" />} */}
      <div
        ref={parentRef}
        className="List"
        style={{
          height: height,
          width: `100%`,
          overflow: "auto",
          display: "flex",
        }}
      >
        <div
          style={{
            height: `${rowVirtualizer.totalSize}px`,
            width: "100%",
            position: "relative",
          }}
        >
          {rowVirtualizer.virtualItems.map((virtualRow) => {
            const isLoaderRow = virtualRow.index > itemsInner.length - 1
            const item = itemsInner[virtualRow.index] || []
            return (
              <div
                key={virtualRow.index}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: `${virtualRow.size}px`,
                  transform: `translateY(${virtualRow.start}px)`,
                }}
              >
                <Box row>
                  <Box row className={"items"}>
                    {element}
                  </Box>

                  {/* {isLoaderRow && isLoading && (
                    <Box
                      flexDirection="row"
                      flex={1}
                      className={s.list}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Spinner />
                    </Box>
                  )} */}
                </Box>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

Items.links = links
export default Items
