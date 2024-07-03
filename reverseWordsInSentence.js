/**
 * 
 * Question no. 1 
   
   Write a function to reverse words in the sentence. Reverse
   the words only. Dots, spaces and commas should remain as it is. Words will
   contain aA to zZ characters only and will not contain anything else.
   Delimiters are only dots, spaces and commas. For example:
   Input (String): 
   
   yM, eman, si. arqI. zizA

   Output (String): My, name, is. Iqra. Aziz

   Input (String): My, name. is Basavaraj

   Output (String): yM, eman. si jaravasaB

}  
 */

function reverse(str) {
  let r = [];
  let map = {};
  str = str.split("");
  let i = str.length - 1;
  let symbols = [",", "."];

  while (i >= 0) {
    if (symbols.includes(str[i])) {
      map[`${i}`] = str[i];
    } else {
      r.push(str[i]);
    }
    i--;
  }

  for (let k in map) {
    r[k] = map[k];
  }
  return r.join("");
}

function reverseStentence(sn) {
  let temp = sn.split(" ");
  let result;
  result = temp.map((word) => {
    return reverse(word);
  });
  return result.join(" ");
}

const t = reverseStentence("My, name. is Basavaraj");

console.log(t);
