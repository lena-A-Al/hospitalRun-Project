import zmq from "zeromq";

async function run() {
  const sock = new zmq.Reply();

  await sock.bind("tcp://127.0.0.1:5556");
  console.log("Reply service bound to port 5556");

  while (true) {
    try {
      const [message] = await sock.receive();
      console.log("Received request:", message.toString());

      const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",
      ];
      const currentDate = new Date().toLocaleString();
      const today = new Date();
      const year = today.getFullYear();
      const month_written = monthNames[today.getMonth()];
      const date = today.getDate();

      // Respond with the current date if requested
      if (message.toString() === "current_date") {
        const response = `${month_written} ${date}, ${year}`;
        console.log("Sending response:", response);
        await sock.send(response);
      } else {
        console.log("Unknown request:", message.toString());
        await sock.send("Unknown command");
      }
    } catch (error) {
      console.error("Error in microservice:", error);
    }
  }
}

run();
