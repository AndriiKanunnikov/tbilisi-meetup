async function* trafficLightIterator(configArr) {
  let nextConfig = configArr;

  while (true) {
    let currentConfig = configArr;

    for (let i = 0; i < configArr.length; i++) {
      const { delay, color } = configArr[i];

      nextConfig = yield color;
      await wait(delay);
    }

    currentConfig = nextConfig;
  }
}
