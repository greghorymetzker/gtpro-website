import { db, fromCursorHash, toCursorHash } from "~/utils/utils"
import axios from "axios"

export const getArticlesRepository = async ({ cursor = null, limit = 10 }) => {
  const cursorOptions = cursor
    ? {
        createdAt: {
          lt: new Date(fromCursorHash(cursor)),
        },
      }
    : {}

  let articles = await db.blogs.findMany({
    where: {
      ...cursorOptions,
    },
    orderBy: [{ createdAt: "asc" }],
    take: parseInt(limit) + 1,
  })
  const hasNextPage = articles.length > parseInt(limit)
  const edges = hasNextPage ? articles.slice(0, -1) : articles
  return {
    edges,
    pageInfo: {
      hasNextPage,
      endCursor: articles.length ? toCursorHash(articles[articles.length - 1].createdAt.toString()) : null,
    },
  }
}

export const getArticles = async () => {
  return await axios.get("/api/articles")
}
