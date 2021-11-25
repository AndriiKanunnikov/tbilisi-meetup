async function* trafficLightIterator(configArr) {
  while (true) {
    for (let i = 0; i < configArr.length; i++) {
      const { delay, color } = configArr[i];

      yield color;
      await wait(delay);
    }
  }
}
