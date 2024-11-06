import { gql } from "apollo-server-core";

export const typeDefs = gql`
  type Query {
    hello: String!
  }

  type Mutation {
    # entity:action
    userCreate(
      firstName: String
      lastName: String
      age: Int
      gender: String
      email: String
      password: String
      race: String
    ): UserPayload
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int
    gender: String!
    email: String!
    password: String!
    race: String!
    createdAt: String!
    updatedAt: String!
  }

  type UserErrors {
    message: String!
  }

  type UserPayload {
    UserErrors: [UserErrors!]
    user: User
  }
`;
