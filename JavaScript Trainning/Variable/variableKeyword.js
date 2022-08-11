// Data types :-


//1. var; var can declare or initialize

var b; // initilaze b = undefined
//console.log(b);
b = 20; // declare and initialise value to 20
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

    const greeting = {
        message: "say Hi",
        times: 4
    }
// while we cannot do this:

    greeting = {// this will throw 'assignment to constant variable.
        words: "Hello",// we can't updated an const object but this properties we can update.
        number: "five"
    }




