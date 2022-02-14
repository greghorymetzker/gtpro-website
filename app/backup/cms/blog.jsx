import { useLoaderData } from "remix"
import Box from "~/components/BaseKit/Box"
// import { Header } from "~/components/Lists/Header/Header"
// import { Items } from "~/components/Lists/Items/Items"
// import { getArticles, getArticlesRepository } from "~/services/blogs"

// export const loader = async () => {
//   let articles = await getArticlesRepository({})
//   return articles
// }

// export const links = () => [...Header.links, ...Items.links]

export default function Index() {
  const articles = useLoaderData()
  return (
    <Box
      column
      style={{
        padding: "34px",
      }}
    >
      blog
      <Box column>
        {/* <Header
          data={[
            {
              title: "Nome",
              style: {
                textAlign: "start",
              },
            },
            {
              title: "Data",
            },
            {
              title: "Status",
              style: {
                width: "15%",
              },
            },
            {
              title: "Ações",
              style: {
                width: "15%",
              },
            },
          ]}
        /> */}
        {/* 
        // <Items
          service={getArticles}
          items={articles}
          height={"80vh"}
          size={300}
          element={<span>Teste</span>}
        ></Items> */}

        {/* {new Array(20)
          .fill(0)
          .map((e) => articles[0])
          ?.map((e) => {
            return (
              <Box
                className="fade"
                data-scroll
                data-scroll-offset={["10%", "0%"]}
                style={{
                  height: "499px",
                  backgroundColor: "red",
                  marginBottom: "40px",
                }}
              >
                <Link key={e.id} to={`./${e.id}/editar`}>
                  {e.title}
                </Link>
              </Box>
            )
          })} */}
      </Box>
    </Box>
  )
}
