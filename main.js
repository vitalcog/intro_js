// Answer the following questions in this file using comments without running the code

// 1.
// What does `givenName` equal right now?
let givenName;
// A: undefined


// 2.
// What is `givenName` set to right now?
givenName = "Tim";
// A: Tim (and it's a string)


// 3.
// What is `givenName` set to right now?
givenName = givenName;
// A: Tim


// 4.
// What is `greeting` set to?
let greeting = "Hello, how are you? " + givenName;
// A: Hello, how are you? Tim


// 5.
// What is `math` set to?
let high = 50;
let low  = 10;
let math = high - low;
// A: 40


// 6.
// What is `math` set to?
math = high - "5";
// A: 45, but was tricky to figure out why

// 7.
// Create a variable to calculate Tim's age
// The answer should read "Tim is 33 years old"
// The answer shoud not be written in a comment.
let born = 1984;
let today = 2017;
let timsAge = (today - born);
console.log("Tim is " + timsAge + " years old");

// A:


// 8.
// Adjust this code. Store some information in the following variables.
// A:
let yourName = "Chad";
let instructorName = "Luke";


// 9.
// Update the variables `yourName` and `instructorName` so the expression below reads correctly.
// A:


// This statement should read correctly
let statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;

console.log(statement);

// 10.
// We've created a variable named after each primitive type.
// Use the `=` operator to assign a value to each variable matching the type in the name.
let myNumber = 7;
let myString = "seven";
let myBoolean = true || false;
// This one's a little tricky - think carefully about what makes a value "undefined"!
let myUndefined = ;
// A:


// For questions 11 - 19: List which boolean value will be stored in each variable. (Remember: `==` does not check data type)

// 11.
let x = (false == 0);
// A.true


// 12.
let y = (false == "");
// A.true


// 13.
let z = (0 == "");
// A.true


// 14.
let a = (null == null);
// A.true


// 25.
let b = (undefined == undefined);
// A.true


// 16.
let c = (undefined == null);
// A.true


// 17.
let d = (null == false);
// A.false


// 18.
let e = (NaN == null);
// A.false


// 19.
let f = (NaN == NaN);
// A.false


// 20.
// Fix the `if...else` statement below by adding an `if` keyword and conditional expression.
// Use the variable `thirsty` as part of your conditional expression.
// A:
let thirsty = true;

if (thirsty) {
  console.log("I'm parched!");
} else {
  console.log("I've had enough to drink.");
}

// For questions 21 - 29 list which statement will be logged.

// 21.
let x;

if(x){
	console.log("True!");
} else {
	console.log("False!");
}
// A: false


// 22.
if(""){
	console.log("True!");
} else {
	console.log("False!");
}
// A:false


// 23.
// this expression will set x to NaN
let x = 1 * undefined;

if(x){
	console.log("True!");
} else {
	console.log("False!");
}
// A:false


// 24.
if(false){
	console.log("True!");
} else {
	console.log("False!");
}
// A:false


// 25.
if(-5 && 5){
	console.log("True!");
} else {
	console.log("False!");
}
// A:true


// 26.
if("Hello World!"){
	console.log("True!");
} else {
	console.log("False!");
}
// A:true


// 27.
if({}){
	console.log("True!");
} else {
	console.log("False!");
}
// A:true


// 28.
if({name: "Yehuda Katz"}){
	console.log("True!");
} else {
	console.log("False!");
}
// A:true


// 29.
if(new Date()){
	console.log("True!");
} else {
	console.log("False!");
}
// A:true


// 30.
// Link this file to the sibling `index.html` document, open the file in your browser and make sure there are no errors in your console.
