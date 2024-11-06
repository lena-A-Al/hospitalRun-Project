import { Context } from "../index";

export const Query = {
  hello: () => "world I am here",
  user: async (_: any, args: any, { prisma }: Context) => {
    //query the user data
    return await prisma.user.findMany();
  },
};
