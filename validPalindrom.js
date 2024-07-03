/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  let temp = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
  let result = "";
  for (let i = temp.length - 1; i >= 0; i--) {
    result += temp[i];
  }
  return result === temp;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
