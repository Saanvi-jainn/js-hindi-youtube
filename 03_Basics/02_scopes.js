// let and const have local scope
// var has global scope
// {} : scope

// var is not mostly used due to the problem of over writing in the variable

let a = 300

if(true)
{
    let a = 10
    const b = 20
    console.log("inner:", a); //10
}

console.log("outer:", a); //300
//console.log(b); //error

//scope in functions:

function one() {
    const username = "Saanvi"

    function two() {
        const website = "youtube"
        console.log(username);
        
    }
   // console.log(website); //error
    two()
}

one() // o/p: Saanvi

// ++++++++++++++++++++ interesting ++++++++++++++++++++++++

//case 1:

console.log(addOne(5)); //in this function syntax, the function can be called anywhere before or after function declaration

function addOne(num) {
    return num + 1
}

//case 2:

//console.log(addTwo(5)); //cannot be called before function declaration as it results in error. This is because the function is declared inside a variable here.

const addTwo = function(num) {
    return num + 2
}

console.log(addTwo(5));
