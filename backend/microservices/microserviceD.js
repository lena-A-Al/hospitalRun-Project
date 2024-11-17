import zmq from "zeromq";

const healthyTips = [
  "Drink at least 8 glasses (2 liters) of water daily to keep your body functioning optimally.",
  "Eat a variety of foods, including fruits, vegetables, whole grains, lean proteins, and healthy fats.",
  "Engage in at least 150 minutes of moderate aerobic activity per week, such as walking, cycling, or swimming.",
  "Adults should aim for 7–9 hours of quality sleep per night to allow for physical and mental recovery.",
  "Dedicate a few minutes daily to meditation or deep breathing to reduce stress and enhance mental clarity.",
  "Reduce exposure to screens, especially before bed, to avoid eye strain and sleep disruption.",
  "Maintain meaningful relationships to combat loneliness and boost mental well-being.",
  "Set boundaries to avoid overcommitting and maintain a healthy work-life balance.",
  "Reflect on what you’re thankful for to cultivate a positive mindset.",
  "Break up long periods of sitting with light activity, such as stretching or walking",
];

async function run() {
  const sock = new zmq.Reply();
  let currentIndex = 0; // Keeps track of the current tip

  // Bind to a port
  await sock.bind("tcp://127.0.0.1:5560");
  console.log("Healthy Tips Microservice is running on port 5560");

  while (true) {
    try {
      // Wait for a request
      const [message] = await sock.receive();
      console.log("Received request:", message.toString());

      if (message.toString() === "getTip") {
        // Send the current tip
        const tip = healthyTips[currentIndex];
        console.log("Sending tip:", tip);
        await sock.send(tip);

        // Move to the next tip (loop back to the start if at the end)
        currentIndex = (currentIndex + 1) % healthyTips.length;
      } else {
        console.log("Unknown request:", message.toString());
        await sock.send("Unknown command");
      }
    } catch (error) {
      console.error("Error processing request:", error);
    }
  }
}

run();
