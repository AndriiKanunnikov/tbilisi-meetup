module.exports = function wait(ms) {
  let res, rej;
  const promise = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });

  setTimeout(res, ms);

  return promise;
};
