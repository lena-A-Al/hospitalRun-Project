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

  // Microservice A
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

  // Microservice B
  randomNaturePicture: async () => {
    const sock = new zmq.Request();

    try {
      await sock.connect("tcp://127.0.0.1:5557"); // Use a different port for this service
      console.log("Connected to Nature Picture Service");

      // Send a request to the microservice
      console.log("Sending request to Nature Picture Service...");
      await sock.send("getRandomPicture");

      // Wait for the response
      console.log("Waiting for response from Nature Picture Service...");
      const [response] = await sock.receive();
      const randomPictureUrl = response.toString();
      console.log(
        "Received response from Nature Picture Service:",
        randomPictureUrl
      );

      return randomPictureUrl;
    } catch (error) {
      console.error("Error connecting to Nature Picture Service:", error);
      throw new Error("Failed to fetch random nature picture");
    } finally {
      await sock.close();
    }
  },

  // Microservice C
  weatherInNYC: async () => {
    const sock = new zmq.Request();

    try {
      // Connect to the weather microservice
      await sock.connect("tcp://127.0.0.1:5559");
      console.log("Connected to Weather Service");

      // Send a request to the weather microservice
      console.log("Sending request to Weather Service...");
      await sock.send("getWeather");

      // Wait for the response
      console.log("Waiting for response from Weather Service...");
      const [response] = await sock.receive();
      const weatherInfo = response.toString();
      console.log("Received response from Weather Service:", weatherInfo);

      if (!weatherInfo) {
        throw new Error("No weather data received");
      }

      return weatherInfo;
    } catch (error) {
      console.error("Error connecting to Weather Service:", error);
      throw new Error("Failed to fetch weather data");
    } finally {
      await sock.close();
    }
  },
};
