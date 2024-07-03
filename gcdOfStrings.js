/**
 
 * For two strings s and t, we say "t divides s" if and only if s = t + t + t +
   ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides
both str1 and str2.



Example 1:

Input: str1 = "ABCABC", str2 = "ABC" Output: "ABC" Example 2:

Input: str1 = "ABABAB", str2 = "ABAB" Output: "AB" Example 3:

Input: str1 = "LEET", str2 = "CODE" Output: ""
 */

function gcdOfString(str1, str2) {
  let temp1 = "";
  let temp2 = "";
  let min = Math.min(str1.length, str2.length);
  temp1 += str1.split("").splice(0, min).join("");
  temp2 += str2.split("").splice(0, min).join("");

  if (temp1 === temp2) {
    return temp1;
  } else {
    return "";
  }
}

console.log(gcdOfString("ABC", "ABCABC"));
