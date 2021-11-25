const earlyDrop = require("./earlyDrop");
const { changeLight, wait, repeat } = require("./effects");

async function* trafficLightIterator(configArr) {
  yield* repeat(function* () {
    for (let i = 0; i < configArr.length; i++) {
      const { delay, color } = configArr[i];

      yield changeLight(color);
      yield earlyDrop(wait(delay));
    }
  });
}

module.exports = trafficLightIterator;
