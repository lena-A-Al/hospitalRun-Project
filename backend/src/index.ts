import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema";
import { Query } from "./resolvers/index";

// create our server:
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
  },
});

// start our application
server.listen().then(({ url }) => {
  console.log(`Server ready on ${url}`); // port:4000
});
