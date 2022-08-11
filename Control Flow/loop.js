// types of loop in javascript
// for in, for of, while , do while

//1. for in

const person = {
    firstName : "Ayan",
    lastName : "Ahmad",

    // fullName : function(){return this.firstName + " " + this.lastName}
    fullName : function(){return `firstName is ${this.firstName} lastName is ${this.lastName}`}
}

// for(let x in person){// for in loop can iterated over object
//     // console.log(x); // this print key of object;
//     // console.log(person[x]);// this will print value at key x   
//     console.log("key -> "+ x+ " ***** "+ " value-> " +person[x]);     
// }

// console.log(person.fullName());

const arr = [1,2,3,25,63,'Aqil', 'Ayan'];
// for(let i in arr){
//     // console.log(arr[i]);
//     // console.log("index " + i + " index's value "+ arr[i]);
// }

// if order is important then don't use for in, instead use: for of, for loop or forEach for array.

// forEach:***************************************************************
//The forEach() method calls a function (a callback function) once for each array element.

// arr.forEach(e=>console.log(e));

// let's apply forEach on object
person.forEach(e=>console.log(e));

