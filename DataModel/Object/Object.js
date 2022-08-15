// in javascript everything is object
// object is here, stores data in key value pair

// const person ={
//     firstName : "Mohammad",
//     secondName : "Ayan",
//     fullName : function(){
//         return `My full Name is ${this.firstName} ${this.secondName}`;
//     },

//     age : 27,
//     eyeColor : "blue"
// }


//print object 
// console.log(person);

// using for in loop
// for(let x in person){
//     console.log(x + " => " + person[x]);
// }

// how to access object element
// console.log(person.firstName);
// console.log(person.secondName);
// console.log(person.fullName());
// console.log(person["age"]);
// console.log(person["eyeColor"]);

// empty object and then adding elements to it
// const employee = {};
// same we do with new keyword when we create object
// const employee = new Object();
// employee.firstName = "Mohammad";
// employee.secondName = "Islam";
// employee.fullName = function(){return `My full name is ${this.firstName } ${this.secondName}`};

// employee.age = 28;
// employee.eyeColor = "blue"

// console.log(employee);
// console.log(employee.fullName());

// adding new properties to object
// employee.nationality = "Indian";
// console.log(employee);

// deleting or removing properties from the object
// delete employee.eyeColor;

// console.log(delete employee.eyeColor);
// console.log(employee);

// nested object*************************************************************************

// const person = {
//     firstName : "Raahil",
//     secondName : "Khan",
//     fullName : function(){return `My full Name is ${this.firstName} ${this.secondName}`},

//     identity: {
//         panNo : 12324565,
//         profile : "Software Engineer",
//         age : 30,
//         location : "Delhi",
//         address : "S-184/188, New Sanjay Camp Part-2, Okhla Phase - 1",
//         eyeColor : "Blue",
//         salary : function(){return `Net salary is ${(this.age)*90 + 45000}`}
//     },

//     fatherName : "Rehbar Khan"
// }

// console.log(person);
// console.log(person.identity.eyeColor);
// console.log(person.identity.salary());

