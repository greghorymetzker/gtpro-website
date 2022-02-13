const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const bcryptjs = require("bcryptjs")

async function main() {
  let password = await bcryptjs.hash("220718", 10)

  await prisma.auths.create({
    data: {
      email: "thaka.gus@gmail.com",
      name: "tharyck",
      password,
      role: "admin",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  })
  await prisma.blogs.create({
    data: {
      title: "Top 10 React Native Libraries That You Should Use In 2022",
      publishDate: "19 de Outubro - 20:18",
      article: `<p style="text-align: center;"><strong><span style="background-color: rgb(255, 0, 0); color: rgb(255, 255, 255);">React Native</span></strong> segment libraries can be an enormous life hack when you’re dealing with your next application project. Why? All things considered, we should begin with React itself. You probably realize that <span style="background-color: rgb(217, 210, 233); color: rgb(53, 28, 117);"><strong>React</strong></span> is an open-source JavaScript library that aids in building UIs for both electronic and mobile applications. It incorporates various parts that you can utilize promptly for your applications.</p>
      <p><br></p>
      <p>
      </p><p><br>
          Normally, while building parts in React, you’ll need to style them to fit the rules of the platform you’re focusing on. That is the place where React Native can help. It’s a structure you can use to foster mobile applications by utilizing React Native development alongside the Native abilities of the objective platform.<br>
          React Native Component Libraries You Should Know</p>
      <p><br>
          Prior, we composed a post including the best UI part libraries and systems. In this post, we’ll investigate React Native part libraries explicitly.</p>
      <p style="margin-left: 10px;"><br></p>
      </p>
      `,
      image: "http://localhost:5000/1632338262482558996247.jpeg",
      callaction: true,
      tags: "artigo;react",
      description:
        "React Native segment libraries can be an enormous life hack when you’re dealing with your next application project. Why? All things considered, we should begin with React itself. You probably realize that React is an open-source...",
      link: "top_10_react_native_libraries_that_you_should_use_in_2022",
      active: true,
      cover: "http://localhost:5000/1632338262482558996247.jpeg",
      imagemobile: "http://localhost:5000/1632338262482558996247.jpeg",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
