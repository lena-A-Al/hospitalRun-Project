import { gql } from "apollo-server-core";

export const typeDefs = gql`
  type Query {
    hello: String!
    user: [User!]!
    medication(searchTerm: String): [Medication!]!
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

  type Mutation {
    medicationCreate(
      genericName: String!
      brandName: String!
      indication: String!
    ): MedicationPayload
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

  type Medication {
    id: ID!
    genericName: String!
    brandName: String!
    indication: String!
  }

  type MedicationError {
    message: String!
  }

  type MedicationPayload {
    medicineErrors: [MedicationError!]
    medication: Medication
  }
`;
