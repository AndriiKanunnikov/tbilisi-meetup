const coroutine = (nextValue) => async (iterator) => {
  const { done, value } = await iterator.next(nextValue);

  if (done) {
    return;
  }

  if (value && value.type && value.type === "effect") {
    value.handler().then((promiseValue) => {
      coroutine(promiseValue)(iterator);
    });
    return;
  }

  if (value && value.constructor === Promise) {
    value.then((promiseValue) => {
      coroutine(promiseValue)(iterator);
    });

    return;
  }

  coroutine(value)(iterator);
};

module.exports = coroutine;
