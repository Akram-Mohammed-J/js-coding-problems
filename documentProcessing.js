function documentUpdates1(str = "", edits) {
  let tempArr = [];
  edits.forEach((tuple, index) => {
    tempArr[index] = tuple;
  });
  return tempArr.join("");
}

const editsArr1 = [(0, "h"), (1, "e"), (2, "l"), (3, "l"), (0, "w")];

const result1 = documentUpdates1("", editsArr1);
console.log(result1);

// corrected code
function documentUpdates(str = "", edits) {
  let tempArr = str.split(""); // Convert existing string into an array

  edits.forEach(([index, char]) => {
    tempArr[index] = char; // Insert character at specified index
  });

  return tempArr.join(""); // Convert array back to string
}

// Correcting the edits array (using proper tuple notation)
const editsArr = [
  [0, "h"],
  [1, "e"],
  [2, "l"],
  [3, "l"],
  [0, "w"],
];

const result = documentUpdates("", editsArr);
console.log(result); // Output: "well"
