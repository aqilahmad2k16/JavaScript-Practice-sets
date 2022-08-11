// type of variable in javascript: (variable declared keyword)
//1. var, 2. let 3. const.

var b;
b = 3;
var b = 6; // here, we can redeclare b (because b is not block scope variable)
// because var keyword is not block scope keyword
// console.log(b);

let c;
// b = 4;
c = 4
// let c = 7; // we can't redeclare same varible(because c is block scope variable);
// console.log(c);

// const d; // this will throw error, in order to use it we must initialize it before use it
// b = 5; // here we are reassign it's value, that it won't take so always assign value at time of declare it with const keyword.
const d = 5;
// const d = 4; /// same as with let keyword
// console.log(d);


// let **********************************************************************
function mySum1(a,b){
    // let sm = 0; // functional scope
    if(true){
        // let sm = a+b; // sm is block scope: can't use out side of this block
        // console.log(sm) // sm = a+b;

        sm = a+b;
    }
    // let sm = 4; // let and const keyword can't be hoisted, we must always declare it before it's use
    // let sm; /// same
    
    console.log(sm); // print: 0;
}

// var**********************************************************************************

function mySum2(a,b){
    // var sm; // functional scope 
    if(true){
        sm = a+b; // sm is not block scope 
        // console.log(sm);// sm = 11;
    }
    
    var sm = 0;// var is hoisted: it means if we declare var variable after it use it will work fine it won't throw any error but because var keyword is hoisted it will automatically comes at the top of the function but same thing is not possible with let and const keyword;
    // console.log(sm); // sm = 0;
}

// console.log(sm); // var keyword is global as well functional scope: it can't use outside of the function

// but var is not block scope: if we do or declare variable with var it will change 
function mySum3(a,b){
    if(true){
        const sm = a+b;
        // sm = 7; // we can't change value of const type variable once it's declared
        // otherwise it will throw "assignment to constant variable"
        console.log(sm); // sm = 11
    }
    
    // sm = 0;// by default it's type will be a number
    // console.log(sm);
    // console.log(typeof(sm)); // type of sm is = number

    const sm = 8;
    console.log(sm); // sm = 8
}

// mySum1(3,8);
// mySum2(3,8);
mySum3(3,8);