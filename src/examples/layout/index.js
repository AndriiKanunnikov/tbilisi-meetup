const TRAFFIC_LIGHT_PAUSE = 500;

function wait(ms) {
  let res, rej;
  const promise = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });

  setTimeout(res, ms);

  return promise;
}

async function updateTrafficLight(color) {
  const activeClassName = "active";
  const inactiveClassName = "inactive";
  const animatedClassName = "animated";

  const prevActiveElement = document.querySelector(`.${activeClassName}`);
  const currActiveElement = document.querySelector(`.${color}`);

  if (prevActiveElement) {
    prevActiveElement.classList.remove(activeClassName);
    prevActiveElement.classList.add(inactiveClassName);
  }

  await wait(TRAFFIC_LIGHT_PAUSE);

  if (!currActiveElement.classList.contains(animatedClassName)) {
    currActiveElement.classList.add(animatedClassName);
  }

  currActiveElement.classList.add(activeClassName);
  currActiveElement.classList.remove(inactiveClassName);
}

function trafficLight(configArr) {
  return async function* iterate() {
    while (true) {
      for (let i = 0; i < configArr.length; i++) {
        const { delay, color } = configArr[i];

        yield color;
        await wait(delay - TRAFFIC_LIGHT_PAUSE);
      }
    }
  };
}

async function init() {
  const iterator = trafficLight([
    { delay: 3000, color: "green" },
    { delay: 3000, color: "yellow" },
    { delay: 3000, color: "yellow" },
    { delay: 4000, color: "red" },
    {
      delay: 2000,
      color: "yellow",
    },
  ]);

  for await (const color of iterator()) {
    console.log("color", color);
    await updateTrafficLight(color);
  }
}

init();
