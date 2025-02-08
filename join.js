// function sum(x) {
//   return function (y) {
//     return function (z) {
//       return x + y + z;
//     };
//   };
// }

// let curry = sum(10);
// console.log(curry(10)(5));

// Please implement a curry() function, which accepts a function and return a curried on

function curry(joinedFn) {
  return function curried(...args) {
    console.log(joinedFn.length);

    if (args.length >= joinedFn.length) {
      return joinedFn.call(this, ...args);
    } else {
      return curried.bind(this, ...args);
    }
  };
}

function join(a, b, c) {
  return `${a}_${b}_${c}`;
}

let curriedFn = curry(join);

console.log(curriedFn(1, 2, 3));
