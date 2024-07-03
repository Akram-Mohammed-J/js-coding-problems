let text = "mathematics";

const countVowels = (str) => {
  let map = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };
  let arr = str.split("");
  arr.forEach((ele) => {
    for (key in map) {
      if (key === ele) {
        map[key] += 1;
      }
    }
  });
  return map;
};

const test = countVowels("mathematics");
console.log(test);
