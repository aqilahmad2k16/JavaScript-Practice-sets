// Error
//in javascript, Error object has two properties
//1st name: this gives name of error object
// i.e, typeError, ReferenceError etc...

// 2nd message: this gives error message 
// i.e, y is not defined.

// try{
//     addalert("welcome guest");
// }
// catch(err){
//     document.getElementById("demo").innerHTML = err.message;
// }

// function myFunction(){
//     const message = document.getElementById("p1");
//     let x = document.getElementById("demo").value;
//     message.innerHTML = " ";
//     try{
//         if(x==" ") throw "empty";
//         if(isNaN(x)) throw "not a number";
//         x = Number(x);
//         if(x<5) throw "too low";
//         if(x>10)throw "too high";
//     }
//     catch(err){
//         message.innerHTML = "Input is "+err;
//     }
//     finally{
//         document.getElementById("demo").value = " ";
//     }

// }

//RangeError

// let num = 100;
// try {
//   num.toPrecision(500);
// } catch (err) {
//   document.getElementById("demo").innerText = err.message; /// RangeError
// }

//Reference error

// let x = 3;
// try {
//   x = y + 1;
// } catch (e) {
//   document.getElementById("demo").innerHTML = e.message;// this will print y is not defined
//   //e.name:- will print ReferenceError
// }

// Syntax error

// try {
//   eval("alert('Hello)");
// } catch (e) {
//   document.getElementById("demo").innerHTML = e.name;//print: Syntax error
// }

// type error
// let num = 1;
// try {
//   num.toUpperCase();
// } catch (e) {
//   document.getElementById("demo").innerHTML = e.name;
// }

// URI(Uniform Resource Identifier) error

