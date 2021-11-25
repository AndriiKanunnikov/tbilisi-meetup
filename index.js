const trafficLight = require("./src/trafficLight");

async function init() {
  const iterator = trafficLight([
    { delay: 300, color: "green" },
    { delay: 100, color: "yellow" },
    { delay: 400, color: "red" },
    {
      delay: 200,
      color: "yellow",
    },
  ]);

  for await (const color of iterator()) {
    console.log(color);
  }
}

init();
