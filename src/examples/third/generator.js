async function* trafficLightIterator(configArr) {
  let nextConfig = configArr;

  while (true) {
    let currentConfig = configArr;

    for (let i = 0; i < configArr.length; i++) {
      const { delay, color } = configArr[i];

      nextConfig = yield color;

      if (nextConfig[0].immidiate) {
        nextConfig[0].immidiate = false;
        break;
      }

      await wait(delay);
    }

    currentConfig = nextConfig;
  }
}
