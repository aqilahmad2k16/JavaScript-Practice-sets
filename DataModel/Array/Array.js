const cars = [
  "BMW   ",
  "Maruti Suzuki   ",
  "Audi  ",
  "jaguar  ",
  "Farari  ",
  "AstanMartin  ",
];

// document.getElementById("demo").innerHTML = cars;

// Array's operation**************************************************
// 1st concat():***************************

const num1 = [12, 2, 3];
const num2 = [23, 4];

// const num3 = num1.concat(num2); // concat forms new array, with the help of concat we concat two or more arrays into single array
// console.log(num3);

// const num4 = cars.concat(num1);
// console.log(num4);

// // nested array
// const num5 = [[5,6,3],45];
// const num6 = num1.concat(num5);
// console.log(num6);

//2nd entries(): for creating array iterator
const f = cars.entries();
// for(let x of f){
//     document.getElementById("demo").innerHTML += x + "<br>";
// }

// 3rd every(): executes a function for each array's element**************

// const age = [65, 12, 35, 22, 56, 5];

// function checkAge(e) {//eturns true if all elements in an array pass a test, else :- false
//   return e > 18;
// }

// document.getElementById("demo").innerHTML = age.every(checkAge);

// fill()*******************************************
//The fill() method fills specified elements in an array with a value.

// document.getElementById("demo").innerHTML = age.fill(35, 2,6);


// filter() *********************************************************************************

//The filter() method creates a new array filled with elements that pass a test provided by a function

const age = [65, 12, 35, 22, 56, 5];

// function checkAdult(e){
//     return e > 18;
// }
// document.getElementById("demo").innerHTML = age.filter(checkAdult);


// find(): *******************************************
//The find() method returns the value of the first element that passes a test

function checkAge(age){
    return age < 18;
}

document.getElementById("demo").innerHTML = age.find(checkAge);

