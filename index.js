// // // this keyword in global context it will point to global object

// // "use strict";

// // // console.log(this);

// // // this keyword is pointing to null or undefined in non strict mode
// // // //it will ponit to window object this behaviour is called (this substitution)
// // // function x() {
// // //   console.log(this);
// // // }

// // // x();

// // // How this keyword will perform inside methods

// // // what is methods ?

// // /**
// //  * Methods are nothing but
// //  * functions which is property of an object
// //  *
// //  *
// //  */

// // //In methods this keyword will point to the object where the function is property of

// // // const student1 = {
// // //   name: "Akram",
// // //   printName: function () {
// // //     console.log(this);
// // //   },
// // // };

// // // student1.printName();

// // // Arrow functions

// // // const test = () => {
// // //   console.log(this);
// // // };

// // // test();

// // // const student2 = {
// // //   name: "Abrar",
// // //   printName: function () {
// // //     const y = () => {
// // //       console.log(this);
// // //     };
// // //     y();
// // //   },
// // // };

// // // student2.printName();

// // // function x() {
// // //   console.log(this);
// // // }

// // // window.x();

// // //call

// // // method sharing or method borrowing

// // const student3 = {
// //   name: "Ashiq",
// //   printName: function (age, home) {
// //     console.log(this.name + " " + age + " " + home);
// //   },
// // };

// // const student4 = {
// //   name: "Vishnu",
// // };

// // student3.printName.call(student4, 24, "Delhi");

// // // apply

// // //  student3.printName.apply(student4, [24, "Delhi"]);

// // // bind

// // const printStudent4Data = student3.printName.bind(student4, 24, "Delhi");

// // console.log(printStudent4Data());

// // // printStudentData();

// // // How this keyword will perform inside dom

// // //This keyword will perform differently inside class or constructor

// document.getElementById("grandparent").addEventListener(
//   "click",
//   (e) => {
//     // e.stopPropagation();
//     console.log("grandparent clicked");
//   },
//   true
// );

// document.getElementById("parent").addEventListener(
//   "click",
//   () => {
//     console.log("parent clicked");
//   },
//   false
// );

// document.getElementById("child").addEventListener(
//   "click",
//   (e) => {
//     console.log("child clicked");
//   },
//   true
// );

/* Given an array of random numbers, Push all the zero’s of a given array to the
end of the array. For example, if the given arrays is {1, 9, 8, 4, 0, 0, 2, 7,
0, 6, 0}, it should be changed to {1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0}. */

// const pushZerostoEnd = (arr) => {
//   arr.forEach((ele, index) => {
//     if (ele == 0) {
//       arr.slice(index);
//       arr.push(ele);
//     }
//   });

//   return arr;
// };

// const result = pushZerostoEnd([1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0]);
// console.log(result);

/**
 * Given a string and an array representing the HTML encoding of the string from
 * and to with the given tag. Return the HTML encoded string.


Example Input: const str = 'Hello, world'; const styleArr = 
[[0, 2, 'i'], [4, 9,'b'], [7, 10, 'u']];

Output: '<i>Hel</i>l<b>o, w<u>orl</u></b><u>d</u>'

Note – <u> tag gets placed before the <b> tag and after it as the insertion
index overlaps it.
//  */

// const encodeHtml = (str, styleArr) => {
//   let result = "";
//   styleArr.forEach(([start, end, style] = styleArr) => {
//     [...str].forEach((char, index) => {
//       if (start == index) {
//         result += `<${style}>` + char;
//       } else if (end == index) {
//         result += char + `</${style}>`;
//       } else {
//         result += char;
//       }
//     });
//     // result +=
//     //   `<${style}>` + [...str].slice(start, end).join("") + `</${style}>`;
//   });
//   return result;
// };

// const test = encodeHtml("Hello, world", [
//   [0, 2, "i"],
//   [4, 9, "b"],
//   [7, 10, "u"],
// ]);

// console.log(test);

function test(nums) {
  let result = [];
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i - 1; j < i; j--) {
      if (i <= 0) {
        leftSum += 0;
      }
      leftSum += nums[j];
    }

    for (let k = i; k < nums.length; k++) {
      rightSum += nums[k];
    }
    result[i] = leftSum - rightSum;
  }
  return result;
}
