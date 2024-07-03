"use strict";

// const m = [
//     0  1  2  3
//  0 [1, 3, 4, 7],
//  1 [1, 7, 4, 5],
//  2 [8, 5, 2, 1],
//  3 [7, 9, 1, 6],
// ];

// for (r in m) {
//   for (c in m[r]) {
//     console.log(m[r][c]);
//   }
// }

// Given an n x n binary matrix image, flip the image horizontally, then invert
// it, and return the resulting image.

// To flip an image horizontally means that each row of the image is reversed.

// For example, flipping [1,1,0] horizontally results in [0,1,1].
// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

// For example, inverting [0,1,1] results in [1,0,0].

// Example 1:

// Input: image = [[1,1,0],[1,0,1],[0,0,0]]
// Output: [[1,0,0],[0,1,0],[1,1,1]]
// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

// const img = [
//   [1, 1, 0],
//   [1, 0, 1],
//   [0, 0, 0],
// ];

// console.log(img);

// for (row in image) {
//   image[row] = image[row].reverse();
//    for (col in image[row]) {
//     image[row][col] = image[row][col] == 1 ? 0 : 1;
//    }
// }

var findUnsortedSubarray = function (nums) {
  let l = 0;
  let result = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[l]) {
      result = nums.length <= 2 ? 2 : nums.splice(i, nums.length - 1).length;
    }
    l++;
  }
  return result;
};

const t = findUnsortedSubarray([2, 1]);
console.log(t);

// You are given an n x n integer matrix grid.

// Generate an integer matrix maxLocal of size (n - 2) x (n - 2) such that:

// maxLocal[i][j] is equal to the largest value of the 3 x 3 matrix in grid
// centered around row i + 1 and column j + 1. In other words, we want to find
// the largest value in every contiguous 3 x 3 matrix in grid.

// Return the generated matrix.

// Example 1:

// Input: grid = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]] Output: [[9,9],[8,6]]
// Explanation: The diagram above shows the original matrix and the generated
// matrix. Notice that each value in the generated matrix corresponds to the
// largest value of a contiguous 3 x 3 matrix in grid.

// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

/*An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]] */

// var isAnagram = function (s = "car", t = "rat") {
//   let s1 = {};
//   let t1 = {};

//   if (s.length !== t.length) {
//     return false;
//   }

//   for (let char of s) {
//     if (s1[char]) {
//       s1[char] += 1;
//     } else {
//       s1[char] = 1;
//     }
//   }

//   for (let char of t) {
//     if (t1[char]) {
//       t1[char] += 1;
//     } else {
//       t1[char] = 1;
//     }
//   }

//   console.log(s1);
//   console.log(t1);
//   for (let charCount in s1) {
//     if (s1[charCount] !== t1[charCount]) {
//       return false;
//     }
//   }

//   return true;
// };

// const s = isAnagram();

// console.log(s);

// const chunk = (arr = [1, 2, 3, 4, 5], size = 9) => {
//   let result = [];
//   let i = 0;
//   let from = 0;
//   let to = from + size;
//   // if (arr.length < size) {
//   //   result.push(arr);
//   // }

//   while (i < arr.length) {
//     if (i == from) {
//       console.log("reached", from, to);
//       result.push(arr.slice(from, to));
//       from = to;
//       to = from + size;
//     }
//     i++;
//   }
//   return result;
// };

// const s = chunk();

// console.log(s);

/**
 * 
 * In this question, you need to implement a function read that takes two parameters:

read(collection, property)

collection: The top level parent object in which we need to find the field.
property: The path of the field we need to find/read.
Expected Output: field value if field exists else undefined.


 */

const collection = {
  a: {
    b: {
      c: {
        d: {
          e: 2,
        },
      },
    },
  },
};

function getValue(obj, property) {
  for (let k in obj) {
    if (k == property) {
      return obj[k];
    }
  }
}

function read(collection, property) {
  let result = collection;
  let propertyArr = property.split(".");
  propertyArr.forEach((prop) => {
    if (typeof result == "object") {
      result = getValue(result, prop);
    } else return result;
  });

  return result;
}

// should return 2
const s = read(
  { developer: { firstname: "Tom", lastName: "Cruz" } },
  "developer.lastName"
);

read([{ developer: "Tom" }, [0, null]], "[1][1]");
// read(collection, "a.b.c.d.e");

console.log(s);
