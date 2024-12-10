//functions are useful for code reuseability

//non parameterized function
function sayMyName() {
    console.log("S");
    console.log("A");
    console.log("A");
    console.log("N");
    console.log("V");
    console.log("I");
}

sayMyName() //function call

//parameterized function
function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}

addTwoNumbers(3, 4) //function call : 7
addTwoNumbers(3, "4") //function call : 34
addTwoNumbers(3, "a") //function call : 3a
addTwoNumbers(3, null) //function call : 3

//a function that returns a value
function addTwoNumbersAgain(number1, number2) {
    let result = number1 + number2
    return result
    console.log("saanvi"); //never executed, unreachable code

    //or directly: return number1 + number2 
}

const result = addTwoNumbersAgain(3,5)
console.log("Result: ", result);

//other functions

function loginUserMessage(username) {
    if(username === undefined)  //or: if(!username)
    { return "Please enter a username" }

    return `${username} just logged in`
}

console.log(loginUserMessage("Saanvi")); //Saanvi just logged in 
console.log(loginUserMessage()); //no arguments paased: undefined logged in (when there is no if block to handle)

//default parameters
function loginUserMessage1(username = "Sam") {
    return `${username} just logged in`
}

console.log(loginUserMessage1("Saanvi")); //Saanvi just logged in 
console.log(loginUserMessage1()); //default argument paased: Sam logged in


//when number of parameters cannot be determined beforehand
//like in shopping cart
//using rest operator "..." (both rest and spread operators have same denotion, difference is based on their usecase)
//rest operator: combines multiple values into a single array

function calculateCartPrice(...num1) {
    return num1
}

console.log(calculateCartPrice(200, 400, 500)); // [200, 400, 500]

function calculateCartPrice1(val1, val2, ...num1) {
    return num1
}

console.log(calculateCartPrice1(200, 400, 500, 2000)); // [500, 2000] :first 2 values are taken by val1 and val2

//to pass object in the function parameter
const user = {
    username: "saanvi",
    price: 199
}

function handleObject(obj) {
    console.log(`Username is ${obj.username} and price is ${obj.price}`);
}

handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})  //creating object while passing it

//to pass array in the function parameter
const newArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(newArray));
console.log(returnSecondValue([100, 200, 400]));
