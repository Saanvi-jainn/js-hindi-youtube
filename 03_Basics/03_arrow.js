//this keyword: to refer to current context or variables in the same scope (the most recent value of the variable)

const user = {
    username: "saanvi",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this); //prints the entire current object
        
    }
}

user.welcomeMessage()  //saanvi, welcome to website
user.username = "sam"
user.welcomeMessage()  //sam, welcome to website

console.log(this); //o/p: {} , since there is no global object in node (it is a standalone engine to execute js), but when this command is executed in the browser console, then it gives a window object since it is the global object in the browser.

//this keyword cannot be used in a function (only used in objects)

function chai() {
    let username = "meena"
    console.log(this.username); //undefined
    console.log(this); //many default global and api values
}

chai()
//same thing applies for the variable type functions declared, they also can't use this keyword

//arrow function: this keyword doesn't work here also
const myChai = () => {
    let username = "meena"
    console.log(this.username); //undefined
    console.log(this); //{}
}

myChai()

//pure arrow function:
const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3, 4)); // 7

//implicit return type arrow function (return keyword isn't required)

const addSum = (num1, num2) => num1 + num2  //or
//const addSum = (num1, num2) => (num1 + num2)

console.log(addSum(3, 4)); // 7

//const addSum = (num1, num2) => ({username: "saanvi"})
//to return an object, parentheses is imp, only curly braces will return undefined