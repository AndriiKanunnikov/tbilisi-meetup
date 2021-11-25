const wait = require("./wait");

function getTrafficLightIterator(configArr) {
  return async function* iterate() {
    while (true) {
      for (let i = 0; i < configArr.length; i++) {
        const { delay, color } = configArr[i];

        yield color;
        await wait(delay);
      }
    }
  };
}

module.exports = getTrafficLightIterator;
