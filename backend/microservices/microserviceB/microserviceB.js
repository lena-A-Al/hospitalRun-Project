import zmq from "zeromq";

const sock = new zmq.Reply();

/** Function to generate a random picture URL */
const getRandomPicture = () => {
  return `https://picsum.photos/800/600?random=${Math.random()}`;
};

/** Function to start the Nature Picture Service */
const startNaturePictureService = async () => {
  console.log("Starting Nature Picture Service...");
  await sock.bind("tcp://127.0.0.1:5557"); // Listen on a different port
  console.log("Nature Picture Service is listening on port 5557");

  for await (const [msg] of sock) {
    console.log("Received request:", msg.toString());

    if (msg.toString() === "getRandomPicture") {
      const randomPictureUrl = getRandomPicture();
      console.log("Sending response:", randomPictureUrl);
      await sock.send(randomPictureUrl);
    } else {
      console.log("Unknown request:", msg.toString());
      await sock.send("Unknown command");
    }
  }
};

// Proper cleanup on shutdown
process.on("SIGINT", async () => {
  console.log("Shutting down Nature Picture Service...");
  await sock.close();
  process.exit(0);
});

// Start the service
startNaturePictureService();
