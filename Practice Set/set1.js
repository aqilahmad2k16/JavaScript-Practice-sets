// // Data types :-


// //1. var; var can declare or initialize

// // var b; // initilaze b = undefined
// // //console.log(b);
// // b = 20; // declare and initialise value to 20
// //console.log(b); // with var we can redeclare the same variable with different;
// // var items = 'banana';// this var variable is globally scoped
// // var fruit = function(fruitname){
// // var items = fruitname;// this var is functional scoped.
// // console.log(items);
// // }

// // fruit('apple');
// // console.log(items);


// // 3. let:-
// /// block scoped/ globally scope
// // let keyword can also initialize as undefined
// let aap 
// // console.log(aap);
// // let a = 'Aqil';
// // const sayHi = function(name){
// //     let e = 'Afroj';
// //     console.log(name); /// let is also block/function scoped, when we declare let variable with {} the it will work within that {} 
// //     console.log(e);
// // }

// // sayHi('Shkeel');
// // console.log(a);
// //console.log(e);// throw error because e is let type and defined already within sayhi function.
// // let c; 
// // console.log(c);

// // c = 30;
// // console.log(c);

// // we can't redeclare "let" data type but we can update it 

// // let aqil = 25;
// // console.log(aqil)
// // aqil = 25.6 /// here we are updating aqil's age
// // console.log(aqil)
// // //let aqil = 26; // here we are redeclare and this will show error of 'already defined' becaouse we can't redeclare let data type.
// // console.log(aqil)

// //3. const keyword
// // once we declare it then we can't it to new value.
// // similar to let, const can only access where it's defined if it's defined/declare inside the block then we can't use out of that block.
// // this is also globally scoped 

// // const aqil = 25;
// // console.log(aqil);
// // aqil = 26;
// // console.log(aqil);// throw error 'assignment to constant"

// // This behavior is somehow different when it comes to objects declared with const. While a const object cannot be updated, the properties of this objects can be updated. Therefore, if we declare a const object as this:

//     // const greeting = {
//     //     message: "say Hi",
//     //     times: 4
//     // }
// // while we cannot do this:

//     // greeting = {// this will throw 'assignment to constant variable.
//     //     words: "Hello",// we can't updated an const object but this properties we can update.
//     //     number: "five"
//     // }


// // you know most of the operator in javaScript are same as it was in java except some like **(exponential operator), = (assingment operator), == (comparison operator), === (strictly comparision operator)

// // **(exponential operator);
// // let x = 2;
// // let y = 3;
// // let c = x**y;
// // // console.log(c);
// // const a = 3+3;// here, it'l be add
// // const d = "3"+3; // this will concanate string with integer
// // const e = "hello" + 20;
// // // console.log(a);
// // console.log(d);
// // console.log(e);
// // console.log(a + " " + d + "  "+ e);

// // == operator: condition must be "equal to by value"
// let x = 5;
// // console.log(x == 2);// here value should be equal irrespective of data type, this will return false

// // console.log(x == 5);// and this will return true
// // console.log(x == "Aman");// return false, values are differnt
// // console.log(x == "5");// return true value should be equal as I said earlier (5 == "5") is true values are same irrespective of their data types.
// // if(x == 2){
// //     console.log(x);
// // }else{
// //     console.log(2);
// // }


// // === operator // here keep in mind that value as well as data type should be same

// // let mage = 20;
// // console.log(mage === 20);// values as well as data types are same so return true
// // console.log(mage === "20"); // return false because value are same but data type are not so return false 
// // console.log(mage === "aman");// here both values as well as data types are differnt so return false

// let mname = "Aqil";
// const mage = 25;
// // console.log(mname);
// // console.log(mage);


// // typeof operator : this will return datatype of variable;


// // console.log(typeof mname);
// // console.log(typeof mage);
// // console.log(typeof (5+5));
// // console.log(typeof "Hey, this is Aqil Ahmad");
// // console.log(typeof 0);
// // console.log(typeof -1);
// // console.log(typeof 'aqil');

// // // Undefined : javaScript return undefined when you don't assign any value to the variable


// // let car;
// // console.log(car);
// // car = 20;
// // console.log(car);

// // function : as you know function is similar to the function as we learned in mathematics i.e, it will take input process them and return output.\


// function myfunction(p1, p2){// called function definition
//     return p1*p2;// p1, p2 are function parameter (that we will take from user)
//     // inside this function argument(the parameter) behave as local variable
//     // function always return some value 
//     // we use function so that we can't reuse the same code but if we create function of that then we can reuse the code by just calling them otherwise we will have to write the same code again and again in the source code and this is we don't want.
// }

// // in order use the function we will have to invoke/call it by passing parameter

// let prod = myfunction(2,20);// here values 2, 20 are argument that we are sending to function
// // console.log(prod);

// /// here we can use function as variable like in given line
// // console.log("the product of " + 2 + " and " + 20 + " is " + myfunction(2,20));

// // Local Variable : variable declares within the function becomes the local to the function then we can't use that variable out of the function as shown below

// // we can't use myboryear here too
// // function mycal(age){
// //     let myboryear = 1995;
// //     // here myboryear is local to this function, it's mean that we can use it anywhere inside this function
// //     return (age-myboryear);
// // }

// // we can't use myboryear variable here
// // console.log(mycal(2022));
// // console.log(myboryear);




// //Object: in real life, a car is an object

// // we know that an object has properties as well as behaviour
// // properties of object like car are: color, weight, size etc 
// // behaviour of object are : start and shop.(something that's going to be an action) i.e, start, drive, brake, stop.
// //Methods are actions that can be performed on objects and method function stores as property inside the object

// // object are variable too, but it stores many values

// // object is key:value pair and this key value come under curly brases{}

// // const car = {
// //     type: "Fiat", 
// //     model: "500",
// //     color: "white",
// //     start: function(){
// //         console.log("your has already started please make sure that you have tie with belt for better riding");
// //         console.log(this.type + "\n"+this.color);
//         // what is "this" keyword: In JavaScript, the this keyword refers to an object.
//         //this is not a variable. It is a keyword. You cannot change the value of this.//
//         //Which object depends on how this is being invoked (used or called)
//         //The this keyword refers to different objects depending on how it is used:
//         // In an object method, this refers to the object.
//         // Alone, this refers to the global object.
//         // In a function, this refers to the global object.
//         // In a function, in strict mode, this is undefined.
//         // In an event, this refers to the element that received the event.
//         // Methods like call(), apply(), and bind() can refer this to any object.
        
// //     }
// // }
// // console.log(car);

// // we can access properties of an object like
// // In two ways you can access object properties
// //1st by . operator
// // objectName.propertiesName

// // let car1 = car.type
// //  car1 = car.type
// // console.log(car1);
// //  car1 = car.model
// // console.log(car1);
// //  car1 = car.color
// // console.log(car1);
// //  car1 = car.start()
//  // console.log(car1);
 
//  // 2nd Square bracket
//  // objectName.["propertiesName"];
 
// //  let car1 = car["type"]
// // //   car1 = car["model"]
// //  console.log(car1);
// //   car1 = car["model"]
// //  console.log(car1);
// //   car1 = car["color"]
// //  console.log(car1);
// //   car1 = car.start();


// // String; it's a array of character, it's use for storing and manipulating the text
// // when you create a string make sure that it should be under double quotes 
// // a string can stor zero and more characters

// // let myName = "Aqil Ahmad";
// // console.log(myName);

// // let mybrother = 'Shakeel Ahmad'
// // console.log(mybrother);
    
// // In order to find the length of our string, we can find by simply using the built-in "length" property

// // console.log(mybrother.length);


// // we can break a longer code to it's next line let's an exmple

// // document.getElementById("demo").innerHTML = // we have broke the this line to next line(just below) it

// // "Hellow World";

// // but in string, we can separate two string by string addition

// // console.log("myName " + myName +" mybrother " + mybrother);
// // let myAge = "";
// // console.log(myAge);

// // javaScript string as objects
// // we know string are primitives value, and created from literals 
// // let z = "JOne";
// // console.log(z);
// // we can also defined string as object as shown

// // let y = new String("Jone");
// // console.log(y)

// // Do not create Strings objects.

// // The new keyword complicates the code and slows down execution speed.

// // String objects can produce unexpected results:



// // String methods and Properties
// // Primitive values, like "John Doe", cannot have properties or methods (because they are not objects).

// // But with JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties

// // properties
// // 1st Length property
// // this property return length of the stirng

// let text = "asdlkhfashdfjasjjlasdjfshheo";
// // console.log(text.length);


// // Extracting String parts

// /// we can get the segment of stirng by 3 methods
// //1st slice(start_index, end_index);
// // slice() extracts a part of a string and returns the extracted part in a new string.

// // The method takes 2 parameters: the start position, and the end position (end not included).

// // This example slices out a portion of a string from position 7 to position 12 (13-1)
// // If a parameter is negative, the position is counted from the end of the string.

// // This example slices out a portion of a string from position -12 to position -6

// let str = "Apple, Banana, Guvava, pineApple";

// // let ptstr = str.slice(7, 21);
// // // console.log(ptstr);

// // let str1 = "fdgfApplebanana";
// // ptstr = str1.slice(-12, -6);
// // console.log(ptstr);
// // If you omit the second parameter, the method will slice out the rest of the string
// // if you don't assign any value to the slice function then it will return you all text
// // console.log(str.slice());

// // 2nd substring()
// //substring() is similar to slice().

// // The difference is that substring() cannot accept negative indexes.
// // 

// // console.log(str.substring(3,12));
// // // If you omit the second parameter, substring() will slice out the rest of the string.
// // console.log(str.substring());

// // 3rd substr:
// /// substr is similar to slice()
// //The difference is that the second parameter specifies the length of the extracted part.

// // console.log(str.substr(7, 21));// end index 21 and 5 represent the length of stirng that we want to take from starting index.
// // console.log(str.substr(7, 5));
// // //If the first parameter is negative, the position counts from the end of the string
// // console.log(str.substr(-4));

// // If you omit the second parameter, substr() will slice out the rest of the string
// // console.log(str.substr(7));


// // 2nd method: (Replacing the string content)
// // let tex = "Please visit Microsoft";
// // // console.log(tex);
// // // let newText = tex.replace("Microsoft", "Google");
// // // console.log(newText);

// // tex = "I supposed to start my job after graduation"
// // console.log(tex);
// // console.log(tex.replace("supposed to start", "wanted to do"));

// // The replace() method does not change the string it is called on.

// // The replace() method returns a new string.

// // The replace() method replaces only the first match

// // If you want to replace all matches, use a regular expression with the /g flag set. See examples below.

// // By default, the replace() method replaces only the first match

// // By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:

// let text1 = "Please visit Microsoft!";
// let newText = text1.replace("MICROSOFT", "W3Schools");
// // console.log(newText);


// // converting uppercase and lowercase
// // 3rd toUppercase() and toLowercase();

// // A string is converted to upper case with toUpperCase():

// // A string is converted to lower case with toLowerCase()
// // let aman = "why are you here ?";
// // let amanCapital = aman.toUpperCase();
// // console.log(amanCapital);

// // aman = "WHY ARE YOU HERE?";
// // let newName = aman.toLowerCase();
// // console.log(newName);

// // // 4rth method String concat();

// // // concat() joins two or more strings:
// // let firstName = "Aqil";
// // let secondName = 'Ahmad';
// // let fullName = firstName.concat(" ", secondName);
// // console.log(fullName);

// // // The concat() method can be used instead of the plus operator. These two lines do the same
// // console.log(fullName);
// // console.log(firstName + " " + secondName);
// // All string methods return a new string. They don't modify the original string.

// // Formally said:

// // Strings are immutable: Strings cannot be changed, only replaced.


// // 5th method String trim();
// //The trim() method removes whitespace from both sides of a string

// firstName = "    Aqil Ahmad";
// // console.log(firstName.trim());

// // 6th method String padStart() and padEnd();ECMAScript 2017 added two String methods: padStart and padEnd to support padding at the beginning and at the end of a string.

// // 7th method Extracting string character

// // by 3 methods we can extract string characters
// // 1st charAt(index);
// //The charAt() method returns the character at a specified index (position) in a string
// // let listofCompany = "google, MicroSoft, facebook, Amazon, Infosis, TCS";
// // let char = listofCompany.charAt(0);
// // console.log(char);
// // console.log(listofCompany.charAt(1)); // charAt() will return you character at given index;
// // console.log(listofCompany.charAt(2));
// // console.log(listofCompany.charAt(3));


// // 2nd charCodeAt(index);
// // //The charCodeAt() method returns the unicode of the character at a specified index in a string
// // //The method returns a UTF-16 code (an integer between 0 and 65535)
// // let text2 = "HELLO WORLD";
// // let char = text.charCodeAt(0);
// // console.log(char);

// // //3rd Property access;
// // // allows property access [ ] on strings:

// // let text3 = "HELLO WORLD";
// //  char = text[0];
// // console.log(char)


// // CONVERTING STRING TO AN ARRAY
// //If you want to work with a string as an array, you can convert it to an array.

// // String split(): use to convert string to an array

// let alph = "a, b, c, d, e";
// // const myArray = alph.split(","); // return an array on the basis of commas
// // const myArray = alph.split(" ");// return an array on the basis of spaces
// // const myArray = alph.split("|");// -----------------------------of pipe
// // console.log(myArray);


// // If the separator is omitted, the returned array will contain the whole string in index [0].
// // let myArray = alph.split();// -----------------------------of pipe

// // // If the separator is "", the returned array will be an array of single characters
// //  myArray = alph.split("");// -----------------------------of pipe
// // console.log(myArray);

// // ####String Search:
// //JavaScript Search Methods
// // String indexOf()
// // String lastIndexOf()
// // String startsWith()
// // String endsWith()


// // 1st indexOf():The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string.

// // let str1 = "Please locate where 'locate'";
// // console.log(str1.indexOf("locate"));

// //2nd lastindexOf();The lastIndexOf() method returns the index of the last occurrence of a specified text in a string

// // console.log(str1.lastIndexOf("locate"));

// //The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.

// // console.log(str1.lastIndexOf("locate", 15));

// //The two methods, indexOf() and search(), are equal?

// // They accept the same arguments (parameters), and return the same value?

// // The two methods are NOT equal. These are the differences:

// // The search() method cannot take a second start position argument.
// // The indexOf() method cannot take powerful search values (regular expressions)
// //

// // 3rd match();
// //The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object

// // console.log(str1.match("loca"));
// //If a regular expression does not include the g modifier (to perform a global search), the match() method will return only the first match in the string.

// // Perform a global, case-insensitive search for "ain":

// // let text = "The rain in SPAIN stays mainly in the plain";
// // text.match(/ain/gi)

// // include(): The includes() method returns true if a string contains a specified value
// let abc = "how I can make body in good/awesome shape";

// // console.log(abc.includes("make"));// return true
// // console.log(abc.includes("Aqil"));// return false

// // Syntax
// // string.includes(searchvalue, start)
// // searchvalue	Required. The string to search for
// // start	Optional. Default 0. Position to start the search
// // Returns:	Returns true if the string contains the value, otherwise false

// //startsWith(): The startsWith() method returns true if a string begins with a specified value, otherwise false
// //string.startsWith(searchvalue, start)
// // console.log(abc.startsWith("how"));
// // console.log(abc.startsWith("Aqil"));
// // console.log(abc.startsWith("I", 4));
// // // ## endsWith():The endsWith() method returns true if a string ends with a specified value, otherwise false:
// // string.endswith(searchvalue, length)
// // console.log(abc.endsWith("shape"));

// //#### String Template**********************************************************************************
// //emplate Literals
// // Synonyms:

// // Template Literals
// // Template Strings
// // String Templates
// // Back-Tics Syntax

// // ### Back-Tics Syntex:Template Literals use back-ticks (``) rather than the quotes ("") to define a string
// let text3 = `Hello World`;
// // console.log(text3);

// //With template literals, you can use both single and double quotes inside a string

// text3 = `I am an engineer 'and besides" it I am also a teacher`;
// // console.log(text3);

// //Template literals allows multiline strings:

// text3 = `hey, you know what today I consulted to a doctor through online
// and it was telecommunication`;
// // console.log(text3);

// // //Interpolation
// // Template literals provide an easy way to interpolate variables and expressions into strings.

// // The method is called string interpolation
// //Syntex: ${}.
// //Variable Substitutions
// // Template literals allow variables in strings

// // let firstname = 'Aqil';
// // let lastname = 'Ahmad';
// // text3 = `Welcome ${firstname} ${lastname}!`
// // console.log(text3);

// //Expression Substitution
// // Template literals allow expressions in strings:

// // Example
// // let price = 10;
// // let VAT = 0.25;

// // let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;



// // JavaScript Numbers:

// // JavaScript has only one type of number. Numbers can be written with or without decimals
// //Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc

// // let n1 = 2;
// // let n2 = 2.23;
// // console.log(n1 + " " + n2);

// // let n3 = n1 + n2;
// // console.log(n3);


// //JavaScript uses the + operator for both addition and concatenation.

// // Numbers are added. Strings are concatenated

let x = 20; 
let y = 10;
// let z = x+y;
// console.log(z);//If you add two numbers, the result will be a number:

// x = "20"
// y = " 10";
// console.log(x + y + 20 + 10);//If you add two strings, the result will be a string concatenation
// console.log(20 + 10 + x + y);//firstly, it will add then it will concatenate with string

// A common mistake is to expect this result to be 30
// let x = 10;
// let y = 20;
let z = "The result is: " + x + y;
// console.log(z);

//A common mistake is to expect this result to be 102030
x = 10;
y = 20;
z = "30";
let result = x + y + z;// firstly, it will add and then concatenate
// console.log(result);
//The JavaScript interpreter works from left to right.

// First 10 + 20 is added because x and y are both numbers.

// Then 30 + "30" is concatenated because z is a string

//NaN - Not a Number
// NaN is a JavaScript reserved word indicating that a number is not a legal number.

// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):
 x = 100 / "Apple";
//  console.log(x);

//  console.log(100/"10");

//The toString() Method
// The toString() method returns a number as a string.

// All number methods can be used on any type of numbers (literals, variables, or expressions)

// converting variabls to numbers:
// There are 3 JavaScript methods that can be used to convert variables to numbers:

// The Number() method
// The parseInt() method
// The parseFloat() method
// These methods are not number methods, but global JavaScript methods.

//Global javaScript methods
//JavaScript global methods can be used on all JavaScript data types.

//The Number() Method
// Number() can be used to convert JavaScript variables to numbers:
// console.log(Number("10"));
// console.log(Number("true"));
// console.log(Number(true));
// console.log(Number('John'));
// console.log(Number("10.233"));
// console.log(Number(10.235));

//If the number cannot be converted, NaN (Not a Number) is returned.

// console.log(Number(new Date("2022-02-26")));// NUmber() also use to convert Date into number and this will return number of milli-second.


// The parseInt() Method
// parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:

// console.log(parseInt("10"));
// console.log(parseInt("10.33"));
// console.log(parseInt("10 20 30"));
// console.log(parseInt("year 10"));//If the number cannot be converted, NaN (Not a Number) is returned

// Number Properties
// Property	            Description
// MAX_VALUE	            Returns the largest number possible in JavaScript
// MIN_VALUE	            Returns the smallest number possible in JavaScript
// POSITIVE_INFINITY	    Represents infinity (returned on overflow)
// NEGATIVE_INFINITY	    Represents negative infinity (returned on overflow)
// NaN	                    Represents a "Not-a-Number" value

// console.log(Number.MAX_VALUE);



// Array******************************************************
// An array is a special variable, which can hold more than one value:

let car  = ["Alto", "Maruti", "BMW", "Audi", "Ferari", "Auston Martin"];
console.log(car);


// Why Using an Array?
// If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:

// let car1 = "Saab";
// let car2 = "Volvo";
// let car3 = "BMW";
// However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?

// The solution is an array!

// An array can hold many values under a single name, and you can access the values by referring to an index number.


const myFriend = [// this method of creating an array is called array literal method 
    "Rohit Kumar",
    "Shkeel Ahmad",
    "Mehboob", 
    "Samim Ansari",
    "Harkesh",
    "Gorauv"
]

// console.log(myFriend);/

// You can also create an array, and then provide the elements:

const myData  = [];
myData[0] = "Aqil Ahmad";
myData[1] = 25;
myData[2] = "Software Engineer";

console.log(myData);

// we can also create an array with new keyword as shown below

const friend = new Array("Rohit","Harkesh", "Gaurav","Shakeel Ahmad");

console.log(friend);

//  readability and execution speed, use the array literal method

// Accessing Array Elements
// You access an array element by referring to the index number



