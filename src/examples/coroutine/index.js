const trafficLightIterator = require("./trafficLight");
const coroutine = require("./coroutine");

coroutine()(
  trafficLightIterator([
    { delay: 3000, color: "green" },
    { delay: 1000, color: "yellow" },
    { delay: 4000, color: "red" },
    {
      delay: 2000,
      color: "yellow",
    },
  ])
);
