// Asked in rippling

const memoSum = () => {
  let cache = {};
  return function (...args) {
    // create a key to store the calculated sum
    const key = args
      .map((arg) =>
        arg === undefined ? "undefined" : arg === null ? "null" : arg
      )
      .toString();

    // check whether the key is already in cache
    if (cache[key] !== undefined) {
      console.log("return from cache");
      return cache[key];
    }

    // Filter only valid numbers and sum them
    const total = args.reduce((prev, curr) => {
      return prev + (typeof curr === "number" && !isNaN(curr) ? curr : 0);
    }, 0);

    cache[key] = total;
    return total;
  };
};

let sum = memoSum();
console.log(sum(1, 3, 3));
console.log(sum(1, 3, 3));
