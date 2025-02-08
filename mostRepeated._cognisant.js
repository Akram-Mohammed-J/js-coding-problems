// my interview solution

const arr = [1, 2, 1, 1, 1, 3, 5, 6, 3];

const mostRepeated = (arr) => {
  let temp = null;
  let map = {};
  let max = 0;
  arr.forEach((ele) => {
    if (map[`${ele}`]) {
      map[`${ele}`]++;
    } else {
      map[`${ele}`] = 1;
    }
  });

  for (let key in map) {
    if (map[key] > max) {
      temp = key;
      max = map[key];
    }
  }
  console.log(temp, max);
};

const result = mostRepeated(arr);

console.log(result);

/**
 * Time and Space Complexity Analysis
    Time Complexity: 𝑂(𝑛) (since we iterate once)
    Space Complexity: O(n) (since we store counts in an object)
    Since we need to track frequencies for an unknown range of numbers, 
    reducing space to O(1) is not possible unless we modify the input array (which is not recommended). 
    If the input numbers are from a small, known range (e.g., 0 to 100), 
    a fixed-size array can be used instead of a map, reducing space complexity.
 */

const mostRepeatedOPtimized = (arr) => {
  let map = {};
  let max = 0;
  let temp = null;
  for (const ele of arr) {
    map[ele] = (map[ele] || 0) + 1;

    // Update max and temp in the same loop
    if (map[ele] > max) {
      max = map[ele];
      temp = ele;
    }
  }

  return { value: temp, frequency: max };
};
const resultOptimized = mostRepeated(arr);
console.log(resultOptimized);
