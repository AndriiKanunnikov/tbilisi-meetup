const trafficLightController = (emitColor) => (configArr) => {
  while (true) {
    for (let i = 0; i < configArr.length; i++) {
      const { delay, color } = configArr[i];

      emitColor(color);
      await wait(delay);
    }
  }
};

// ---
const emitter = new EventEmiter();

trafficLightController((color) => emitter("change", color))(configArr);

emitter.on("change", console.log);
