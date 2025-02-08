//
Array.prototype.flat = function (depth = 1) {
  let curDepth = 0;
  let result = [];

  while (curDepth !== depth) {
    for (let i = 0; i < arr[curDepth].length; i++) {
      result.push(arr[curDepth][i]);
    }
    curDepth++;
  }
  return [...result, ...arr.splice(curDepth, arr.length - 1)];
};

const arr = [[1, 2], [3, 4, 5], [6]];

console.log(arr.flat(3));
