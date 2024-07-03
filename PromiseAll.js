var promiseAll = function (functions) {
  let prLength = functions.length;
  let result = [];
  let counter = 0;

  return new Promise((resolve, reject) => {
    functions.forEach((fn, index) => {
      console.log(typeof fn);
      fn()
        .then((rsp) => {
          result[index] = rsp;
          counter += 1;
          if (counter === prLength) {
            resolve(result);
          }
        })
        .catch((err) => {
          console.log(result);
          reject(err);
        });
    });
  });
};

let functions = [
  () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
  () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
  () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
];

promiseAll(functions)
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.log(err);
  });
