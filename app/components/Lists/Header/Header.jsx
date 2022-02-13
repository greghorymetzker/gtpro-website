import Box from "~/components/BaseKit/Box/Box"
import s from "./styles.css"

export const links = [{ rel: "stylesheet", href: s }]

export const Header = ({ data }) => {
  return (
    <Box row className={"header-list"}>
      <ul>
        {data.map((e, k) => {
          return (
            <li key={k} style={{ ...e.style }}>
              {e.title}
            </li>
          )
        })}
      </ul>
    </Box>
  )
}

Header.links = links
