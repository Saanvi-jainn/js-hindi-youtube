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
