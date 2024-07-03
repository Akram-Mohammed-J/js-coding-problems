// check the given input array is a palindrome or not using two pointers

const isPalindrome = (arr) => {
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    if (arr[l] === arr[r]) {
      l++;
      r--;
    } else {
      return false;
    }
  }
  return true;
};

// const result = isPalindrome([1, 3, 2, 1]);

// console.log(result);

// given a sorted input array return indices which sums to the target

//brute force solution

const findIndices = (arr, target) => {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] == target) {
        return [i, j];
      }
    }
  }
  return [];
};

// -->TC O(N^2)

// given a sorted input array return indices which sums to the target (optimal solution) TC-> O(n)
// const result = findIndices([1, 1, 2, 2], 4);

// console.log(result);

const findIndicesTwoPointers = (arr, target) => {
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    if (arr[l] + arr[r] === target) {
      return [l, r];
    } else if (arr[l] + arr[r] < target) {
      l++;
    } else if (arr[l] + arr[r] > target) {
      r--;
    }
  }
  return [];
};

const re = findIndicesTwoPointers([1, 2, 2, 5], 4);

console.log(re);
