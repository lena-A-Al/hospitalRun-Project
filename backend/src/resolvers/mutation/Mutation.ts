import { Medication, User } from "@prisma/client";
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

interface medicineCreateInterface {
  genericName: string;
  brandName: string;
  indication: string;
}

interface MedicinePlayLoadInterface {
  medicineErrors: { message: string }[];
  medication: Medication | null;
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
  medicationCreate: async (
    parent: any,
    { genericName, brandName, indication }: medicineCreateInterface,
    { prisma }: Context
  ): Promise<MedicinePlayLoadInterface> => {
    const medication = await prisma.medication.create({
      data: {
        genericName,
        brandName,
        indication,
      },
    });
    return {
      medicineErrors: [],
      medication: medication,
    };
  },
};
