import { User } from "@prisma/client";
import { Context } from "../../index";

interface userCreateIntyerface {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  race: string;
  password: string;
}

interface UserPayloadInterface {
  userErrors: { message: string }[];
  user: User | null;
}

export const Mutation = {
  userCreate: async (
    parent: any,
    {
      firstName,
      lastName,
      age,
      gender,
      email,
      race,
      password,
    }: userCreateIntyerface,
    { prisma }: Context
  ): Promise<UserPayloadInterface> => {
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        age,
        gender,
        email,
        race,
        password,
      },
    });
    return {
      userErrors: [],
      user: user,
    };
  },
};
