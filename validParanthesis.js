function validParanthesis(str) {
  let stack = [];
  let bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // Push only opening brackets onto the stack
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    }
    // If a closing bracket appears, check if it matches the last opening bracket
    else if (char === ")" || char === "}" || char === "]") {
      // If stack is empty or top of stack doesn't match, return false
      if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
        return false;
      }
    }
  }

  // At the end, stack should be empty for a valid sequence
  return stack.length === 0;
}

// Test cases
console.log(validParanthesis("()[]{}")); // true
console.log(validParanthesis("([{}])")); // true
console.log(validParanthesis("(]")); // false
console.log(validParanthesis("([)]")); // false
console.log(validParanthesis("{[]}")); // true
