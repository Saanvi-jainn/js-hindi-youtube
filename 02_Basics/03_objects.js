/*objects in js can be formed from:
1. literals : singleton object is not formed
2. constructors : singleton object is formed : using Object.create */

//object literals:
const mySym = Symbol("key1") //defining a symbol

const JsUser = {
    name: "Saanvi",
    "full Name": "Saanvi Jain",
    [mySym]: "mykey1",
    age: 20,
    location: "Ghaziabad",
    email: "saanvi@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// ways to access objects
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full Name"]); //this method is useful when key value is defined as a string itself or a symbol
console.log(JsUser[mySym]);

//changing object values
JsUser.email = "saanvi@ibm.com"
Object.freeze(JsUser)  // locks the object values
JsUser.email = "saanvi@microsoft.com"
console.log(JsUser);


const JsUser2 = {
    name: "Saanvi",
    "full Name": "Saanvi Jain",
    [mySym]: "mykey1",
    age: 20,
    location: "Ghaziabad",
    email: "saanvi@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

JsUser2.greeting = function(){
    console.log("Hello JS user"); 
}

JsUser2.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
//for referencing same object in the function

console.log(JsUser2.greeting); // [Function (anonymous)]
JsUser2.greeting(); //Hello JS user
JsUser2.greetingTwo(); //Hello JS user, Saanvi


//NOTE: if the function value of an object is accessed using console.log(), then the o/p also contains undefined value along with the required o/p. Example-
console.log(JsUser2.greeting()); 
/* output: 
Hello JS user
undefined 
*/