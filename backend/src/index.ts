import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema";
import { Mutation, Query } from "./resolvers/index";
import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

// create an instance of prisma to interact with the db
const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;
}

// create our server:
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
  },
  context: {
    prisma,
  },
});

// start our application
server.listen().then(({ url }) => {
  console.log(`Server ready on ${url}`); // port:4000
});
