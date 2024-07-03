/*Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s*/

function mergeAlternate(word1, word2) {
  word1 = word1.split("");
  word2 = word2.split("");
  let merged = "";
  let word1Count = 0;
  while (word1Count < word1.length && word1Count < word2.length) {
    merged += word1[word1Count];
    merged += word2[word1Count];
    word1Count++;
  }
  if (word2.length > word1.length) {
    merged += word2.splice(word1Count, word2.length - 1).join("");
  }
  if (word1.length > word2.length) {
    merged += word1.splice(word1Count, word1.length - 1).join("");
  }
  return merged;
}

console.log(mergeAlternate("abcd", "pq"));
