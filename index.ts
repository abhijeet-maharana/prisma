import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// const prisma = new PrismaClient({log:["query"]}); //To Log the queries

async function main() {
  // --- Create User
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "John Doe",
  //       email: "john@gmail.com",
  //     },
  //   });
  //   console.log(user);
  // .createMany also can be used
  // ---- Get all users
  //   const users = await prisma.user.findMany();
  //   console.log(users);
  //   select or include can't be used
  //   distinct: property for unique key
  //   take: work as limit
  //   skip: work as offset
  //   orderBy: for asc or desc on a property
  //   equals: exact match
  //   not: not euqals
  //   in: in the array
  //   notIn: not in the arrya
  //   lt: less than
  //   gt: greater than
  //   lte and gte also there
  //   contains,endsWith, startsWith
  // AND: for combining multiple queries
  // OR, NOT also there
  //  every, some, none also there for relationship data
  //   .findUnique is also there
  //   .findFirst also
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
  //   select: also can be used
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
  //   updateMany also there
  //   increment, decrement, multiply, divide can be used on any number like age
  //   connect and disconnect can be used to add or remove in a specific relation with id
  // --- Remove data
  //   const article = await prisma.article.delete({
  //     where: {
  //       id: 1,
  //     },
  //   });
  //   deleteMany also there
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
