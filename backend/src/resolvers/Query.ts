import { Context } from "../index";
// import zmq from "zeromq";
const zmq = require("zeromq");

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

  currentDate: async () => {
    const sock = new zmq.Request();

    try {
      await sock.connect("tcp://127.0.0.1:5556");
      console.log("Connected to Date Service");

      // Send a request to the microservice
      console.log("Sending request to Date Service...");
      await sock.send("getCurrentDate");

      // Wait for the response
      console.log("Waiting for response from Date Service...");
      const [response] = await sock.receive();
      const currentDate = response.toString();
      console.log("Received response from Date Service:", currentDate);

      return currentDate;
    } catch (error) {
      console.error("Error connecting to Date Service:", error);
      throw new Error("Failed to fetch current date");
    } finally {
      await sock.close();
    }
  },
};
