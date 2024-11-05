import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    hello: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => "world",
  },
};

// create our server:
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then((url) => {
  console.log(`Server ready on ${url}`);
});
