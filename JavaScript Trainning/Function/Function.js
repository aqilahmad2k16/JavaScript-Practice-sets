//function declaration

//Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon)

//for example
function findSum(a,b){
    return a+b;
}   

// console.log(findSum(50,60));//here we are calling and printing at same time

//Function expression
//A function expression can be stored in a variable:

// const sum = function(a,b){return a+b}; // this function is anonymous fucntion(function without having name), this sum variable is worked as function.

// console.log(sum(45,45));

// Anonymous self invoking function (IFEE): A self-invoking expression is invoked (started) automatically, without being called.

// Function expressions will execute automatically if the expression is followed by ().

(function(){
    console.log("Hey there!");
})();// this will invoke by itself or say automatically


// function can be used as values
function myfunction(a,b){
    return a*b;
}

// let a = myfunction(3,4);
// document.getElementById("demo").innerHTML = a; // practical example

// function can be used in expressions
// let x = myfunction(3,5) * 2;
// document.getElementById("demo").innerHTML = x;

// functions are objects
//javascript function have both properties and methods

function heySum(a,b){
    return arguments.length;
}

let b = heySum(10, 29);
// document.getElementById("demo").innerHTML = b;

function findPro(a,b){
    return a*b;
}

// document.getElementById("demo").innerHTML = findPro.toString();

// Arrow Function;=>
//You don't need the function keyword, the return keyword, and the curly brackets

const x = (a,b)=>a*b;
// document.getElementById("demo").innerHTML = x(4,5);

const y = (a,b)=>{return a+b};
// document.getElementById("demo").innerHTML = y(2,5);


// Function Parameter **************************************************************
//Arguments object
//The argument object contains an array of the arguments used when the function was called (invoked).

function findMax(){
    let max = -Infinity;
    for(let i=0; i<arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }
    
    return max;
}


// document.getElementById("demo").innerHTML = findMax(45,12,25,36,58,100);

// find total sum

function findSum(){
    let sum = 0;
    for(let i=0; i<arguments.length; i++){
        sum+= arguments[i];
    }

    return sum;
}

// document.getElementById("demo").innerHTML = findSum(10,20,30);


// this keyword ***************************************************************************

// In a browser the page object is the browser window. The function above automatically becomes a window function.
//myFunction() and window.myFunction() is the same function:
// document.getElementById("demo").innerText = window.findSum(10,20,30);

//Alone, this refers to the global object.
// In a function, this refers to the global object.
// document.getElementById("demo").innerText = this.findSum(10,20,30);

let z = findMultiplication(); // z = will be window object

function findMultiplication(){
    return this; // this will return object window
}

// document.getElementById("demo").innerHTML = z;

const obj = {
    firstName: "Ayan",
    secondName: " Ahmad",
    fullName: function(){
        return this.firstName + " " + this.secondName;// here, 'this' keyword represent current object 'obj'
    }
}

// document.getElementById('demo').innerHTML = obj.fullName();

//Invoking a Function with a Function Constructor

//function constructor
function fillValue(a, b){
    this.firstName = a;
    this.secondName = b;

}

//creating new object
const obje = new fillValue("Ayan", "Ahmad");

// object's firstName to html element
// document.getElementById('demo').innerHTML = obje.firstName;

/// Function call**********************************************************************
//The JavaScript call() Method
//The call() method is a predefined JavaScript method.
// It can be used to invoke (call) a method with an owner object as an argument (parameter).
// With call(), an object can use a method belonging to another object.

// const person = {
//     fullName : function(){
//         return this.firstName + " "+ this.secondName;
//     }
// }

// const person1 = {
//     firstName : "Ayan",
//     secondName : "Ahmad"
// }

// const person2 = {
//     firstName : "Mohammad",
//     secondName: "Islam"
// }

// document.getElementById("demo").innerHTML = person.fullName.call(person1);//This example calls the fullName method of person, using it on person1

// document.getElementById("demo").innerHTML = person.fullName.call(person2);

//The call() Method with Arguments***********************
// The call() method can accept arguments

// const person = {
//     fullName : function(city, country){
//         return this.firstName + " " + this.lastName + " " + city + " " + country;
//     }
// }

// const person1 = {
//     firstName: "Mohammad",
//     lastName : "Islam"
// }

// document.getElementById("demo").innerHTML = person.fullName.call(person1, "New Delhi", "Delhi");


// Function Apply************************************************************************
//Method Reuse
// With the apply() method, you can write a method that can be used on different objects.

// The JavaScript apply() Method
// The apply() method is similar to the call() method (previous chapter)

//The Difference Between call() and apply()
// The difference is:

// The call() method takes arguments separately.

// The apply() method takes arguments as an array.

// const person = {
//     fullName : function(city, country){
//         return this.firstName + " " + this.lastName + " " + city + " " + country;
//     }
// }

// const person1 = {
//     firstName: "Mohammad",
//     lastName : "Islam"
// }

// document.getElementById("demo").innerHTML = person.fullName.apply(person1, ["New York City", "United State of America"]);

// document.getElementById("demo").innerHTML = Math.max(1,3,4);

// function bind()************************************************************************************

//Function Borrowing
// With the bind() method, an object can borrow a method from another object.

// The example below creates 2 objects (person and member).

// The member object borrows the fullname method from the person object:

// const person = {
//     firstName : "Ayan",
//     lastName : "Ahmad",
//     fullName : function(){
//         return this.firstName + " " + this.lastName;
//     }
// }

// const member = {
//     firstName: "Mohammad",
//     lastName : "Islam"
// }


// const fullName = person.fullName.bind(member);
// document.getElementById("demo").innerHTML = fullName();


//function closure*************************************************************************





