// (ab = () => {
//     console.log("hello");

// })();

// function myFunction(a, b) {
//   console.log(arguments.length);
// }

// myFunction(2, 3);

// function myFunction(a, b) {
//   return a * b;
// }

// var text = myFunction.toString();
// console.log(text);

// let array1 = ["a", "b", "c"];
// let array2 = [1, 2, 3];

// const array3 = [...array1, ...array2]
// const array3 = array1.concat(array2);
// console.log(array3);

// let baked_desserts = ["cake", "cookie", "donut"];
// let desserts = ["icecream", "flan", "frozen yoghurt", ...baked_desserts];
// console.log(desserts);
//Appending baked_desserts after flan
// let desserts2 = ["icecream", "flan", ...baked_desserts, "frozen yoghurt"];
// console.log(desserts2);

// function fibonacci(number) {
//   let a = 0;
//   let b = 1;
//   let c;
//   console.log(a);
//   c = a + b;
//   console.log(b);
//   for (i = 1; i <= number; i++) {
//     c = a + b;
//     console.log(c);
//     a = b;
//     b = c;
//   }
// }

// fibonacci(10);

// let swapping = () => {
//   let a = 1;
//   let b = 15;

//   b = b - a; // 1-15= 14
//   a = a + b; // 1+14 = 15
//   b = a - b; // 14-15= 1

//   console.log(a, b);
// };
// swapping();

// let swapping = () => {
//   let a = 1;
//   let b = 15;
//   let tem;

//   tem = a;
//   a = b;
//   b = tem;

//   console.log(a, b);
// };
// swapping();

// let palindrome = () => {
//   let str = "ii";

//   let revStr = str.split("").reverse().join("");
//   console.log(revStr);
//   if (revStr == str) {
//     console.log("palindrom");
//   } else {
//     console.log(" not palindrom");
//   }
// };

// palindrome();

// let palindrome = () => {
//   let str = "ii";

//   let l = str.length;
//   console.log(l);
//   let arr = [];
//   for (i = l - 1; i >= 0; i--) {
//     arr.push(str.charAt(i));
//   }
//    let rve =arr.join("");

//   if(str == rve){
//       console.log("hee")
//   }
// };

// palindrome();

let Binary_Search;
// list should be sorted one.

// function binarySearch(arr, val) {
//     let startInx = 0;
//     let endInx = arr.length - 1;

//     while (startInx <= endInx) {
//       let midInx = Math.floor((startInx + endInx) / 2);

//       if (arr[midInx] === val) {
//         return midInx;
//       }

//       if (val < arr[midInx]) {
//         end = midInx - 1;
//       } else {
//         start = midInx + 1;
//       }
//     }
//     return -1;
//   }

//   console.log( binarySearch([1,2,3,4,5,6],3))

let Linear_Search;

// function LinearSearch (arr,val){

// arr.forEach((element,i) => {
//   if(element == val){
//     console.log(element,i)
//   }

// });

// }

// LinearSearch([1,2,3,4,5,6],3)

let armstrongNumber;

// function armstrong_Number() {

//   let number = 153;
//   let num = number;
//   let rem;
//   let mul;
//   let sum = 0;

//   let length = num.toString().length;
//   console.log("length", length);

//   while (num != 0) {
//     rem = num % 10;
//     console.log("rem------", rem);

//     mul = Math.pow(rem, length);
//     console.log("mul------", mul);

//     sum = sum + mul;
//     console.log("sum------", sum);

//     num = parseInt(num / 10);

//     console.log("num------", num);
//   }

//   if (number == sum) {
//     console.log("Armstrong_Number");
//   } else {
//     console.log("Not armstrong_Number");
//   }
// }

// armstrong_Number();
