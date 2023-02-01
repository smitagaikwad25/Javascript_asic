// // // how to define function
// let a;
// let b;
// // demo()'

// function Fname(a, b) {
//   console.log("hello", a+b);
// }

// Fname(1, 2);

// function demo(a, b) {
//   // let a = 10;
//   // let b = 20;
//   let add = a + b + c;
//   console.log(add);
//   callback("smita")
//   // return add;
// }

// var a = 10;

// // Function Declaration (pass paramereters)
// let a;
// let b;
// function add(a, b) {
//   console.log(a + b);
// }

let a;

// function add() {
// const a = 10
// a= 11
// }

// let alicsTopisCount;
// let bobTopisCount;
// var user1 = "Alice";
// let user2 = "Bob";

let topi = ["Math", "Marath", "English"];
const occurrences = topi.reduce(
  (acc, curr) => ((acc[curr] = (acc[curr] || 0) + 1),acc),
  {}
);
console.log(occurrences);

// const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 20;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
// function topis() {

//     topi.forEach((value) => {
//         let name = prompt("name ?")
//         let input = prompt("input ?")

//          if (name == user1 && input == 1) {
//             alicsTopisCount++
//         }

//         if (name == user2 && input == 1) {
//             bobTopisCount++
//         }

//     })
//  console.log("topis numbe of liked by alice ", alicsTopisCount)
//  console.log("topis numbe of liked by Bob ", bobTopisCount)
// }

// topis()

// add(2, 5); //function call

// function expression or anonymous function

// let x = (p1, p2) => {
//     let sum = p1 + p2;
//     console.log("sum------------->",sum)

//   };
// x(2, 3);

// let test = (a, b) => {
//   console.log(a, b);
// };

// test(2, 3);

// let abc = (p1, p2, fn) => {
//   console.log(fn);
//   let str = fn(2, 3);
//   console.log("str---->", str);
// };

// abc(3, 5, x); //function expression

// arrow function

// let test = (name)=>{
// console.log("hello", name)
// }

// test("smita")

// x()

// let demo = (a,b) => {
//     console.log(a,b);
// };
// demo(10,11 );

// var abc = (name)=>{
//   console.log(name)

// }

// abc("smita")

// let name;
// let test = (name) => {
//   console.log("hello", name);
// };

// test("smita");

//   let addition = (a,b) => {

// };

//   addition(2,5);

//variables in java script var,let and const

// // var: Variables declared with "var" are in the function scope and values can be  reassigned.
// var a = 5;
// function varScope() {
//   var a = 5;
//   var a = 6;

//   //   a = 10;

//   console.log("inside function it self", a);

//   {
//     // var a = 5;
//     console.log("inside blk", a);
//   }
// }

// console.log("out side of function", a);

// varScope();

// Let: Variables declared as "let" are in the block scope and values can be  reassigned.
// let a = 5;

// const arr = [1];
// console.log(arr);
// arr.push(2);
// console.log(arr);
// const a= 10
// const a = 9;

// function letScope() {
//   let a = 9;
//   a = true;

//   //   a = 10;
//     console.log("inside fun", a);

//   {
//     // const a = 5;
//     console.log("inside blk", a);
//   }
// }
// // console.log("outside function it self", a);

// letScope();

//Const :Variable with "const" keyword has block level of scope and values cannot be  reassigned.

var sychVsAsych;

// Blocking methods execute synchronously and non-blocking methods execute asynchronously.

// Blocking

// console.log("hi");
// console.log("hello");
// console.log("how are you");

// // non - blocking

// console.log("hi");

// setTimeout(() => {
//   console.log("hello");
// }, 5000);

// console.log("how are you");

// ({Lname,age}={Lname:"smita",age:24})
// console.log(Lname)

// let {name,age1 }= {name:"ni",age1:25}
// console.log(age1)

var hoisting;
// // Hoisting means that you can define a variable before its declaration.

// var : Allowed

// x = 8;

// console.log(x); // 8

// var x;

// // when you run the code, you will see there is no error and that we can declare var variables after defining them.

// // let : Not allowed

// x = 8;

// console.log(x); // ReferenceError: x is not defined

// let x;

// // when you run the code, you will get an error as let variables do not support hoisting.

// // const : Not allowed

// x = 8;

// console.log(x); // SyntaxError: Missing initializer in const declaration

// const x;

// // when you run the code, you will get an error as const variables do not support hoisting.

var CallbackFun;

// // A callback is a function passed as an argument to another function.
// // A callback is a function that is to be executed after another function has finished executing — hence the name ‘call back’.

// let test1 = (a) => {
//   a();
// };

// let test2 = () => {
//   console.log("hello");
// };

// test1(test2);

// var greet = (a, b) => {
//   console.log("how are you");

//   let abc = a + b;
//   return abc;
// };

// var sayHi = (callback) => {
//   let a = 2;
//   let b = 4;
//   let result;
//   console.log("hello");
//   setTimeout(() => {
//     result = callback(a, b);
//     console.log("result--->", result);

//     // let finalResult = result + 20;
//     // console.log("finalResult----->", finalResult);
//   }, 1000);

//   //   console.log("Done");
// };

// sayHi(greet);

// var promises;

var abc = () => {
  let a = 2;
  let b = 2;
  let ab = a + b;
  //   console.log("addition", ab);
  return ab;
};

// const xyz = () => {
//   return new Promise((resolve, reject) => {
//     let flag = true;
//     if (flag === true) {
//       resolve(abc());
//     } else {
//       reject("promise rejected");
//     }
//   });
// };

// xyz()
//   .then((result) => console.log("after resolve--->", result))
//   .catch((erro) =>
//     console.log("aftre rejected---------------------------------->", erro)
//   );

// // var asychAwait;

// function resolveAfter2Seconds() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(abc());
//     }, 2000);
//   });
// }
// async function asyncCall() {
//   let abc = 6;
//   console.log("calling");
//   const result = await resolveAfter2Seconds();
//   console.log("after resolve result", result);
//   const FinaleResult = result + abc;
//   console.log("after resolve", FinaleResult);
//   // expected output: "resolved"
// }

// asyncCall();

var clouser;

// function x() {
//   var a = 10; // lexical scope
//   function y() {
//     console.log(a);
//   }
//   y();
// }

// x();

var arrayOperations;

// let fruits = ["Apple", "orange", "kiwi"];
// let l = fruits.length;
// console.log(l);

// Access an Array item using the index position

// let first = fruits[0];
// console.log(first);
// Apple

// let last = fruits[fruits.length - 1];
// console.log(last);
// // Banana
// Loop over an Array

// fruits.forEach((value,i) => {
//   console.log(value,i);
// });

// //   Add an item to the end of an Array

// fruits.push("abcd");

// console.log("added", fruits);

// // // // // Remove an item from the end of an Array
// let last = fruits.pop(); // remove Orange (from the end)
// console.log("removed orange", fruits);

// // // Remove an item from the beginning of an Array
// let first = fruits.shift(); // remove Apple from the front
// console.log("removed", fruits);
// // ["Banana"]

// // Add an item to the beginning of an Array

// let newLength = fruits.unshift("Strawberry"); // add to the front
// console.log("added ", fruits);

// // Find the index of an item in the Array

// fruits.push('Mango')
// ["Strawberry", "Banana", "Mango"]

// let pos = fruits.indexOf("Apple");
// console.log("index", pos);

// console.log("array elements", fruits)
// // Remove an item by index position

// let pos = fruits.indexOf('Banana')
// console.log("index", pos)
// let n = 1 // this is how to remove items, n defines the number of items to be removed,
// let removedItem = fruits.splice(pos, n) // this is how to remove an item
// console.log("after splice",fruits)

// // ["Strawberry", "Mango"]

// const fruits = ["Orange", "Apple", "Mango"];

// fruits.splice(1,2,"kiwi","sdfghj"); // even we can add
// console.log(fruits);

// let text = "hello hi";
// let afterSlice = text.slice(1, 7);
// console.log(afterSlice);

// let text = "hello hi";

// let afterSlice = text.split(" ");
// console.log(afterSlice);

// const fruits = ["Banana", "Orange"];
// const fruits1 = ["Apple"];
// const fruits2 = ["Mango"];

// const newArray = fruits.concat(fruits1, fruits2);

// const newArray = [...fruits,...fruits1,...fruits2]

// console.log(newArray);

// const fruits = ["Kiwi", "Orange"];

// let afterCov = fruits.join("*");
// let afterCov = fruits.toString();
// console.log(afterCov);

var map;
// const cities = ["ny", "la", "tx"];

// let output = cities.map((data) => console.log(data.toUpperCase()));

// // console.log(output)

// const numbers = [45, 4, 9, 16, 25, 2];

// let output = numbers.map((no) => no * 2);
// console.log(output);

// let filterOutPut = numbers.filter((no) => no < 3);
// console.log(filterOutPut);

// let output = numbers.reduce((a, v) => {
//   return a + v;
// },200);
// console.log(output);

// let total = numbers.

// const fruits = {
//   shareInfo: [
//     {
//       id: "1",
//       a: "sss",
//       b: "sss",
//       question: "whi?",
//     },
//     {
//       id: "2",
//       a: "sss",
//       b: "sss",
//       question: "whi?",
//     },
//     {
//       id: "3",
//       a: "sss",
//       b: "sss",
//       question: "whi?",
//     },
//     {
//       id: "4",
//       a: "sss",
//       b: "sss",
//       question: "whi?",
//     },
//     {
//       id: "4",
//       a: "sss",
//       b: "sss",
//       question: "whi?",
//     },
//   ],
// };

// const length = Object.keys(fruits.shareInfo[0]).length;

// console.log(length);

// const userdetails = {
//     email: "smita@gamil.com",
//     passowrd: "sdfg"
// }

// const userCtl = (req) => {

//     console.log("befor  getting res back--------->", req)
//     const data = userService(req)
//     console.log("After getting res back--------->", data)

// }

// const userService = (userCre) => {
//     console.log("befor processing--------->", userCre)
//     const data = userCre.email
//     console.log("After processing--------->", data)
//     return data;

// }

// userCtl(userdetails)

// function getBusinessDatesCount(startDate, endDate) {
//   var count = 0;
//   var curDate = startDate;
//   while (curDate < endDate) {
//     // var dayOfWeek = curDate.getDay();
//     // if(!((dayOfWeek == 6) || (dayOfWeek == 0)))
//     count++;
//     curDate.setDate(curDate.getDate() + 1);
//   }
//   return count;
// }

// //Usage

// var startDate = new Date("7/10/2015");
// var endDate = new Date("7/20/2015");
// var numOfDates = getBusinessDatesCount(startDate, endDate);

// console.log("num of days---->", numOfDates);

// function add (a,b){
//     return a + b;
// }
// console.log("2","3")

var promiseAll;

// takes an iterable of promises as input and returns a single Promise.
//  It rejects when any of the input's promises rejects, with this first rejection reason.
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("one"), 1000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("two"), 2000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("three"), 3000);
// });
// const p4 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("four"), 4000);
// });
// const p5 = new Promise((resolve, reject) => {
//   reject(new Error("reject"));
// });

// // Using .catch:
// Promise.all([p1, p2, p3, p4])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });

// Logs:
// "reject"

var anyPromises;
//support node 15 v+ , takes an iterable of promises as input and returns a first fulfilled Promise even an any
// of the input's promises rejects

// const promise1 = Promise.reject(0);
// const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

// const promises = [promise1, promise2, promise3];

// Promise.any(promises).then((value) => console.log(value));

var racePromise;
//  takes an iterable of promises as input and returns a single Promise.
// This returned promise settles with the eventual state of the first promise that settles.
// It rejects when any of the input's promises rejects

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, 'one');
//   });

//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'two');
//   });

//   Promise.race([promise1, promise2]).then((value) => {
//     console.log(value);
//     // Both resolve, but promise2 is faster
//   });

var promiseFinally;

//   The finally() method can be useful if you want to do some processing or
// cleanup once the promise is settled, regardless of its outcome.

// function checkMail() {
//   return new Promise((resolve, reject) => {
//     if (Math.random() > 0.5) {
//       resolve("Mail has arrived");
//     } else {
//       reject(new Error("Failed to arrive"));
//     }
//   });
// }

// checkMail()
//   .then((mail) => {
//     console.log(mail);
//   })
//   .catch((err) => {
//     console.error(err);
//   })
//   .finally(() => {
//     console.log("Experiment completed");
//   });
