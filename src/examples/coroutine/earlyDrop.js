const EventEmitter = require("events");

const emitter = new EventEmitter();

setTimeout(() => emitter.emit("drop"), 1000);

const earlyDrop = (promise) => ({
  type: "effect",
  action: "earlyDrop",
  handler: () => {
    let resolve, reject;
    const result = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });

    emitter.on("drop", () => resolve());
    promise.then(() => resolve());

    return result;
  },
});

module.exports = earlyDrop;
