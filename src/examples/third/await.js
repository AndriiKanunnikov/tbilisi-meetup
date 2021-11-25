class TrafficLight extends EventEmitter {
  applyConfig(config) {
    this.config = config;
  }

  async run(config) {
    for (let i = 0; i < config.length; i++) {
      const { delay, color } = config[i];

      this.emit("colorChange", color);

      if (this.config[0].imidiate) {
        nextConfig[0].immidiate = false;
        break;
      }

      await wait(delay);
    }
  }

  async init() {
    while (true) {
      await this.run(this.config);
    }
  }
}
