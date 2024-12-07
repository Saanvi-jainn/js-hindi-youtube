// datatypes : primitive and non primitive(or reference types)

//primitive: 7 types => call by value =>
//string, number, boolean, null, undefined, symbol, BigInt

//example for symbol:
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); //false

//reference type: call by reference =>
//array, objects, functions

//array example:
const fruits = ["mango", "banana", "apple"];

//objects example:
let myObj = {
    name: "saanvi",
    age: "20"
};

//function example:
const myFunction = function(){
    console.log("hello world!");
}

//JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

//whereas, in typescript, the datatype needs to be defined at the time of variable declaration.

//to know datatype of any variable, use 'typeof'


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory:
// Stack (Primitive)(copy of variable is obtained), Heap (Non-Primitive) (reference of variable is obtained)

//stack example
let myYoutubename = "SaanviJain"
let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

//Heap example
let userOne = {
    email: "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne 
//reference from userOne

userTwo.email = "saanvi@google.com" 
//original value gets changed in heap

console.log(userOne.email);
console.log(userTwo.email);
