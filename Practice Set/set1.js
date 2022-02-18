// Data types :-


//1. var; var can declare or initialize

// var b; // initilaze b = undefined
// //console.log(b);
// b = 20; // declare and initialise value to 20
//console.log(b); // with var we can redeclare the same variable with different;
// var items = 'banana';// this var variable is globally scoped
// var fruit = function(fruitname){
// var items = fruitname;// this var is functional scoped.
// console.log(items);
// }

// fruit('apple');
// console.log(items);


// 3. let:-
/// block scoped/ globally scope
// let keyword can also initialize as undefined
let aap 
// console.log(aap);
// let a = 'Aqil';
// const sayHi = function(name){
//     let e = 'Afroj';
//     console.log(name); /// let is also block/function scoped, when we declare let variable with {} the it will work within that {} 
//     console.log(e);
// }

// sayHi('Shkeel');
// console.log(a);
//console.log(e);// throw error because e is let type and defined already within sayhi function.
// let c; 
// console.log(c);

// c = 30;
// console.log(c);

// we can't redeclare "let" data type but we can update it 

// let aqil = 25;
// console.log(aqil)
// aqil = 25.6 /// here we are updating aqil's age
// console.log(aqil)
// //let aqil = 26; // here we are redeclare and this will show error of 'already defined' becaouse we can't redeclare let data type.
// console.log(aqil)

//3. const keyword
// once we declare it then we can't it to new value.
// similar to let, const can only access where it's defined if it's defined/declare inside the block then we can't use out of that block.
// this is also globally scoped 

// const aqil = 25;
// console.log(aqil);
// aqil = 26;
// console.log(aqil);// throw error 'assignment to constant"

// This behavior is somehow different when it comes to objects declared with const. While a const object cannot be updated, the properties of this objects can be updated. Therefore, if we declare a const object as this:

    // const greeting = {
    //     message: "say Hi",
    //     times: 4
    // }
// while we cannot do this:

    // greeting = {// this will throw 'assignment to constant variable.
    //     words: "Hello",// we can't updated an const object but this properties we can update.
    //     number: "five"
    // }


// you know most of the operator in javaScript are same as it was in java except some like **(exponential operator), = (assingment operator), == (comparison operator), === (strictly comparision operator)

// **(exponential operator);
// let x = 2;
// let y = 3;
// let c = x**y;
// // console.log(c);
// const a = 3+3;// here, it'l be add
// const d = "3"+3; // this will concanate string with integer
// const e = "hello" + 20;
// // console.log(a);
// console.log(d);
// console.log(e);
// console.log(a + " " + d + "  "+ e);

// == operator: condition must be "equal to by value"
let x = 5;
// console.log(x == 2);// here value should be equal irrespective of data type, this will return false

// console.log(x == 5);// and this will return true
// console.log(x == "Aman");// return false, values are differnt
// console.log(x == "5");// return true value should be equal as I said earlier (5 == "5") is true values are same irrespective of their data types.
// if(x == 2){
//     console.log(x);
// }else{
//     console.log(2);
// }


// === operator // here keep in mind that value as well as data type should be same

// let mage = 20;
// console.log(mage === 20);// values as well as data types are same so return true
// console.log(mage === "20"); // return false because value are same but data type are not so return false 
// console.log(mage === "aman");// here both values as well as data types are differnt so return false

let mname = "Aqil";
const mage = 25;
// console.log(mname);
// console.log(mage);


// typeof operator : this will return datatype of variable;


// console.log(typeof mname);
// console.log(typeof mage);
// console.log(typeof (5+5));
// console.log(typeof "Hey, this is Aqil Ahmad");
// console.log(typeof 0);
// console.log(typeof -1);
// console.log(typeof 'aqil');

// // Undefined : javaScript return undefined when you don't assign any value to the variable


// let car;
// console.log(car);
// car = 20;
// console.log(car);

// function : as you know function is similar to the function as we learned in mathematics i.e, it will take input process them and return output.\


function myfunction(p1, p2){// called function definition
    return p1*p2;// p1, p2 are function parameter (that we will take from user)
    // inside this function argument(the parameter) behave as local variable
    // function always return some value 
    // we use function so that we can't reuse the same code but if we create function of that then we can reuse the code by just calling them otherwise we will have to write the same code again and again in the source code and this is we don't want.
}

// in order use the function we will have to invoke/call it by passing parameter

let prod = myfunction(2,20);// here values 2, 20 are argument that we are sending to function
console.log(prod);

/// here we can use function as variable like in given line
console.log("the product of " + 2 + " and " + 20 + " is " + myfunction(2,20));

// Local Variable : variable declares within the function becomes the local to the function then we can't use that variable out of the function as shown below

// we can't use myboryear here too
function mycal(age){
    let myboryear = 1995;
    // here myboryear is local to this function, it's mean that we can use it anywhere inside this function
    return (age-myboryear);
}

// we can't use myboryear variable here
console.log(mycal(2022));
console.log(myboryear);






