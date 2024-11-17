import zmq from "zeromq";
import fetch from "node-fetch";

const sock = new zmq.Reply();

const startWeatherService = async () => {
  await sock.bind("tcp://127.0.0.1:5559");
  console.log("Weather Service is listening on port 5558");

  for await (const [msg] of sock) {
    if (msg.toString() === "getWeather") {
      try {
        const url = "https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current_weather=true";
        const response = await fetch(url);
        const data = await response.json();
        const weatherInfo = `Temperature: ${data.current_weather.temperature}°C, Windspeed: ${data.current_weather.windspeed} km/h`;
        await sock.send(weatherInfo);
      } catch (error) {
        await sock.send("Error fetching weather data");
      }
    } else {
      await sock.send("Unknown command");
    }
  }
};

startWeatherService()
