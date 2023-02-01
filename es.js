var ES6;

var Default_function_parameters;
// allow named parameters to be initialized with default values if no value or undefined is passed.

// function multiply(a, b = 5) {
//   return a * b;
// }

// console.log(multiply(2));
// // // // expected output: 10

// // // console.log(multiply(5));

var Template_Literals;
// In ES6, we can use a new syntax ${PARAMETER} inside of the back-ticked string.

// let firstName = "smita";
// let lastName = "shinde";

// console.log(`Your name is ${firstName} ${lastName}`);

var Multi_line_Strings;

// let poemData = `Johny Johny Yes Papa,
//                 Eating sugar?  No, papa!
//                 Telling lies? No, papa!
//                 Open your mouth Ah, ah, ah`;

// console.log(poemData);

var spread_operator;

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];

// var arr3 = [...arr1, ...arr2]; // Append all elements in arr2 after arr1 and returnb
//  var arr4 = [...arr1];
// console.log(arr3)
// Equate to

// var obj1 = {
//   foo: "bar",
//   x: 42,
// };

// var obj2 = {
//   foo: "baz",
//   y: 13,
// };

// var clonedObj = { ...obj1 , ...obj2 };
// console.log(clonedObj);
// // // // Cloned object: {foo: 'bar', X: 42}

// var mergedObj = { ...obj1, ...obj2 };
// console.log(mergedObj);
// // // Merged object: {foo: 'Baz', X: 42, Y: 13}

var destructuring_assignment;
// it possible to unpack values from arrays, or properties from objects, into distinct variables.

// let arr = [10, 20, 30, 40, 50, 60];

// let[...rest] = arr;
// console.log(rest);
// // // // // // expected output: 10

// console.log(a,rest);

// let [a, b, , , ...rest] = [10, 20, 30, 40, 50];
// console.log(a);
// // // expected output: 10

// console.log(b);
// // // expected output: 20

// console.log(rest);
// // expected output: Array[30, 40, 50]

// const foo = ['one', 'two', 'three'];

// const [red, yellow, green] = ["one", "two", "three"];
// console.log(red); // "one"
// console.log(yellow); // "two"
// console.log(green); // "three"

var obj;
// ({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
// console.log(a); // 10
// console.log(b); // 20
// console.log(rest); // {c: 30, d: 40}

// const user = {
//   number: 42,
//   isVerified: true,
// };

// const { number, isVerified } = user;

// console.log(number); // 42
// console.log(isVerified); // true

// var Arrow_Functions;
// var Promises;
// var Block_Scoped_Constructs_LetandConst;

let Modules;
// modules with import and export operands.
// We can import userID variable and getName method using import statement

// export var userID = 10;
// export function getName(name) {

// };

// // import { Console } from 'console';
// import { userID, getName } from 'module';
// console.log(userID); // 10

var ES7;

var String_includes;
// The includes() method returns true if a string contains a specified value, otherwise false:

// let text = "Hello world, welcome to the universe.";

// if (text.includes("Hello")) {
//   console.log("yes i am here!!");
// } else {
//   console.log("NO i am not!!");
// }

// var index_operator;
// // exponential operator is introduced, and the result is equivalent to Math.pow(..)

// console.log(2 ** 10);// Output 1024
// console.log(Math.pow(2, 10)) // Output 1024

var objKey;

// var obj = {
//   foo: "bar",
//   baz: 42,
// };
// console.log(Object.values(obj));
// // // // // ["foo", "baz"]

// var Objectvalues;
// var obj2 = {
//   foo: "bar",
//   baz: 42,
// };

// console.log(obj2.baz);
// ["bar", 42]

// const str1 = "bar\rexample foo example";

// const regex1 = /bar.example/s;

// // console.log(regex1.dotAll); // true

// console.log(str1.replace(regex1, " "));

// Pattern 
// console.log(/hello.world/.test('hello\nworld'));  // false
// console.log(/hello.world/s.test('hello\nworld'));