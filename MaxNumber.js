function findMax(arr) {
  if (arr.length === 0) return 0;
  let max = Number.NEGATIVE_INFINITY;
  for (let ele of arr) {
    if (ele > max) {
      max = ele;
    }
  }
  return max;
}

const result = findMax([-3, -5, -1]);
console.log(result);
