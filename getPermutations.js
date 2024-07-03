const getPermutations = (str) => {
  let clone = str;
  str.split("");
  let combine = "";
  let result = [];

  for (let i = 0; i < clone.length; i++) {
    combine += clone[i];
    for (let j = i; j < clone.length; j++) {
      combine += clone[j + 1];
      for (let k = i; k < clone.length; k++) {
        combine += clone[k + 1];
        console.log(combine);
      }
    }
  }
  return result;
};

const t = getPermutations("abc");
console.log(t);
