// types of loop in javascript
// for in, for of, while , do while

//1. for in

const person = {
  firstName: "Ayan",
  lastName: "Ahmad",

  // fullName : function(){return this.firstName + " " + this.lastName}
  fullName: function () {
    return `firstName is ${this.firstName} lastName is ${this.lastName}`;
  },
};

for(let x in person){// for in loop can iterated over object
    // console.log(x); // this print key of object;
    // console.log(person[x]);// this will print value at key x
    console.log("key -> "+ x+ " ***** "+ " value-> " +person[x]);
}

// console.log(person.fullName());

// const arr = [1,2,3,25,63,'Aqil', 'Ayan'];
// for(let i in arr){
//     // console.log(arr[i]);
//     // console.log("index " + i + " index's value "+ arr[i]);
// }

// if order is important then don't use for in, instead use: for of, for loop or forEach for array.

// forEach:***************************************************************
//The forEach() method calls a function (a callback function) once for each array element.

// arr.forEach(e=>console.log(e));

// let's apply forEach on object
// person.forEach(e=>console.log(e));// we can't use forEach() with object otherwise throw person.forEach is not a function.

// for of: *****************************************************
//The JavaScript for of statement loops through the values of an iterable object.

// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

// loop over array

// const cars = ['BMW', 'MarutiSuzuki', "Audi"];
// for(let x of cars){
//     console.log("Car's Name " + x );
// }

// loop over string

// const college_Name = "Delhi Technology University";
// for(let y of college_Name){
//     console.log(y) ;
// }

// while loop
const age = [35, 45, 25, 62, 12, 23, 58, 85];
// let i=0;
// let sum = 0;
// while(i<age.length){
//     sum += age[i];
//     console.log(age[i] + "->" + sum);
//     i++;
// }

// Switch: ***********************************************
//The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
// If there is no match, the default code block is executed.

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "Day is Bad";
}

// console.log(day);

// set in javascript****************************************************************************************

const friendsName = new Set([
  "Ayan Ahmad",
  "Aftab Khan",
  "Firoj Akhtar",
  "Amit Gupta",
]);
// console.log(friendsName);

const letter = new Set();
letter.add("a");
letter.add("b");
letter.add("c");
// console.log(letter);

// console.log(letter.delete('a'));
// console.log(letter);

// console.log(letter.has('a'));
// console.log(letter.has('b'));

// letter.forEach(e=>console.log(e));

// console.log(letter.values());
// console.log(letter.size);
// for(let x of letter.values()){
//     console.log(x);
// }

// Map in javascript**************************************************************************
const myMap = new Map();

myMap.set("Ayan", 16);
myMap.set("Amit", 25);
myMap.set("Mehtab", 23);
myMap.set("Rehmat", 23);
// console.log(myMap);

// console.log(myMap.get("Ayan"));

// console.log(myMap.has("Mehtab"));
// console.log(myMap.has("Aqil"));

// myMap.delete("Rehmat");
// console.log(myMap);

// myMap.forEach((e) => console.log(e));

for (let x of myMap.entries()) {
//   console.log(x);
}

// console.log(myMap.size);
