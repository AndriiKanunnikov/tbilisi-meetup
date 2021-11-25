function changeLight(color) {
  console.log(color);
}

function wait(ms) {
  let res, rej;
  const promise = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });

  setTimeout(res, ms);

  return promise;
}

function* repeat(iterator) {
  while (true) {
    yield* iterator();
  }
}

module.exports = { changeLight, wait, repeat };
