import { PrismaClient } from "@prisma/client"

let db

if (process.env.NODE_ENV === "production") {
  db = new PrismaClient()
  console.log(db)
  db.$connect()
} else {
  console.log("PRISMA INSTANCE", db)
  if (!db) {
    db = new PrismaClient()
    db.$connect()
  }
}

export const toCursorHash = (string) => Buffer.from(string).toString("base64")

export const fromCursorHash = (string) => Buffer.from(string, "base64").toString("ascii")

export { db }
