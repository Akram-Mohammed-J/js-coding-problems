/**
 6. Remove Duplicates from Sorted Array Easy Topics Companies Hint Given an
    integer array nums sorted in non-decreasing order, remove the duplicates
    in-place such that each unique element appears only once. The relative order
    of the elements should be kept the same. Then return the number of unique
    elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you
need to do the following things:

Change the array nums such that the first k elements of nums contain the unique
elements in the order they were present in nums initially. The remaining
elements of nums are not important as well as the size of nums. Return k.

 */

var Findtarget = function (heights) {
  let clone = Array.from(heights).sort((a, b) => a - b);
  let res = 0;

  clone.forEach((h, index) => {
    if (h !== heights[index]) {
      res++;
    }
  });
  return res;
};

const result = Findtarget([
  10, 6, 6, 10, 10, 9, 8, 8, 3, 3, 8, 2, 1, 5, 1, 9, 5, 2, 7, 4, 7, 7,
]);

console.log(result);
