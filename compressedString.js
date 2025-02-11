function compressedString(str) {
  let strArray = str.split("");
  let result = "";
  let map = {};
  strArray.forEach((char) => {
    if (map[char]) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  });

  for (let key in map) {
    if (map[key] == 1) {
      result += key;
    } else {
      result += key + map[key];
    }
  }
  return result;
}

const result = compressedString("aaacccbddeeee");
console.log(result);

function compressedStringOpti(str) {
  if (!str) return "";

  let result = "";
  let count = 1;

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++; // Increment count if the same character repeats
    } else {
      result += str[i - 1] + (count > 1 ? count : ""); // Append compressed form
      count = 1; // Reset count for new character
    }
  }

  return result;
}

console.log(compressedStringOpti("aaacccbddeeee")); // Output: "a3c3bd2e4"
console.log(compressedStringOpti("abc")); // Output: "abc"
console.log(compressedStringOpti("aabbcc")); // Output: "a2b2c2"
console.log(compressedStringOpti("")); // Output: ""
