import { Context } from "../index";

export const Query = {
  hello: () => "world I am here",
  user: async (_: any, args: any, { prisma }: Context) => {
    //query the user data
    return await prisma.user.findMany();
  },
  medication: async (
    _: any,
    { searchTerm }: { searchTerm?: string },
    { prisma }: Context
  ) => {
    // If no searchTerm is provided, return all medications
    if (!searchTerm) {
      return await prisma.medication.findMany();
    }
    // Search by genericName, brandName, or indication
    return await prisma.medication.findMany({
      where: {
        OR: [
          { genericName: { contains: searchTerm, mode: "insensitive" } },
          { brandName: { contains: searchTerm, mode: "insensitive" } },
          { indication: { contains: searchTerm, mode: "insensitive" } },
        ],
      },
    });
  },
};
