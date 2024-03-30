import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // --- Create User
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "John Doe",
  //       email: "john@gmail.com",
  //     },
  //   });
  //   console.log(user);
  // ---- Get all users
  //   const users = await prisma.user.findMany();
  //   console.log(users);
  // --- Create an article and associate it with user
  //   const article = await prisma.article.create({
  //     data: {
  //       title: "Johns First Article",
  //       body: "This is Johns first article",
  //       author: {
  //         connect: {
  //           id: 1,
  //         },
  //       },
  //     },
  //   });
  //   console.log(article);
  // --- Get all articles
  //   const articles = await prisma.article.findMany();
  //   console.log(articles);
  // --- Create a user and article and associate them
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Sara Smith",
  //       email: "sara@gmail.com",
  //       articles: {
  //         create: {
  //           title: "Saras First Article",
  //           body: "This is my first article",
  //         },
  //       },
  //     },
  //   });
  //   console.log(user);
  //   const users = await prisma.user.findMany();
  //   console.log(users);
  //   const articles = await prisma.article.findMany();
  //   console.log(articles);
  //   --- Get all users with articles
  //   const users = await prisma.user.findMany({
  //     include: {
  //       articles: true,
  //     },
  //   });
  //   console.log(users);
  //   --- Loop Users articles
  //   users.forEach((user) => {
  //     console.log(`User: ${user.name}, Email: ${user.email}`);
  //     console.log("Articles:");
  //     user.articles.forEach((article) => {
  //       console.log(`- Title: ${article.title}, Body: ${article.body}`);
  //     });
  //     console.log("\n");
  //   });
  //   --- Update data
  //   const user = await prisma.user.update({
  //     where: {
  //       id: 1,
  //     },
  //     data: {
  //       name: "John Doe Jr.",
  //     },
  //   });
  //   console.log(user);
  // --- Remove data
  //   const article = await prisma.article.delete({
  //     where: {
  //       id: 1,
  //     },
  //   });
  //   console.log(article);
  //   console.log(articles);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
