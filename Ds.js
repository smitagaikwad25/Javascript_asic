let DATA_STRUCTURE;

// DATA STRUCTURE: way to organize data so we can use it efficiently.

// What is algorithm: steps or process to arrange data.

// LINEAR LIST:
// Operation is getting performed either at start or end.

// NON-LINEAR:
// Operation are getting started at any where.

let Array;

//Array Traversing
// let data = [9, 45, 2, 8, 45, 23, 7, 78, 0, 11, 41, 77];

// for (let i = 0; i < data.length; i++) {
//   console.log(`Array ${i} is ${data[i]}`);
// }

//Insertion:
// shifting element by one position at right side

// let data = [60, 30, 10, 67, 40];
// let newEl = 70;
// let position = 2;
// console.warn(data);
// let i;

// for (let i = data.length - 1; i >= 0; i--) {
//   if (i >= position) {
//     console.log("-----------------", i + 1);
//     data[i + 1] = data[i];
//     if (i == position) {
//       data[i] = newEl;
//     }
//   }
// }
// console.log(data);

// Delete Element in Array: shifting element at rigth side, removed last undefining space.

// let data = [30, 20, 45, 76, 20, 80];
// let position = 3;

// for (let i = position; i < data.length - 1; i++) {
//   data[i] = data[i + 1];
// }
// data.length = data.length - 1;
// console.log(data);

// let data = [30, 20, 45, 76, 20, 80];
// let El = 20;

// for (let i = 0; i < data.length - 1; i++) {

//       if(data[i] == El){
//             console.log(`El on ${i}`)
//       }

// }

var ArrySorting;
// Bubble sorting

// let data = [40, 30, 12, 25];
// let j;
// let i;
// let swapping;

// for (i = 0; i < data.length; i++) {
//   console.log("1st loop------->", data[i]); 0
//   for (j = 0; j < data.length; j++) {

//     console.log("2st loop------->", data[j]);
//     if (data[j] > data[j + 1]) {
//       let temp = data[j];

//       data[j] = data[j + 1];
//       data[j + 1] = temp;
//     }
//   }
// }

// // console.log("array---------------------->",data)

var mape;
// let data = new Map();
// let data = new Map([
//   ["name", "Anil"],
//   [true, "bool key"],
//   [100, "hundred"],
// ]);

// data.set("color", "green");
// console.warn(data.size);
// console.warn(data.has(100));
// console.warn(data.get(true));
// // data.clear()
// console.warn(data);

// let data = [4, 5, 6];

// for (x in data) {
//   console.warn(x);
// }

// for (a of data) {
//   console.warn(a);
// }

// data.forEach((val, key) => {
//   console.warn(val, key);
// });

// var set;

// let set = new Set();
// set.add(1);
// set.add(2);
// set.add(3);
// set.add(1); // duplicate, ignored
// console.log(set.size); // 3
// console.log(set.has(2)); // true
// set.delete(3);
// console.log(set); // 2

// let data = new Set(["anil", "peter", "anil"]);

// data.add({ email: "test@test.com" });

// console.warn(data.has("peter"));

// data.delete("anil");
// console.warn(data);
// for (x of data) {
//   console.warn(x);
// }

// data.forEach((val) => {
//   console.warn(val);
// });
// console.warn(data.entries());

var stack;

let data = [];
let currentSize = data.length;
let max = 5;

function push(newEle) {
  if (currentSize < max) {
    data[currentSize] = newEle;
  } else {
    console.log("stack is already full");
  }

  currentSize++;
}

function pop() {
  if (currentSize > 0) {
    // currentSize -= 1;
    data.length = data.length - 1;
  } else {
    console.log("aleady empty");
  }
}

push(19);
push(20);

pop();

console.log("stack data----", data);

// let data = [];
// let currentSize = data.length;
// let max = 5;
// function push(newVal) {
//   if (currentSize >= max) {
//     alert("Stack is full you can not add" + newVal);
//   }
//   data[currentSize] = newVal;
//   currentSize += 1;
// }

// function pop() {
//   if (currentSize > 0) {
//     currentSize -= 1;
//     data.length = currentSize;
//   } else {
//     alert("stack is already empty");
//   }
// }

// push(20);
// push(30);
// push(10);
// push(2);
// pop();
// pop();
// pop();
// push(25);
// push(23);
// push(67);
// // pop()
// // pop()

// console.warn(data);
