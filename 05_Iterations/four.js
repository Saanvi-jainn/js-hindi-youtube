// for in loop

const myObject = {
    js: "javascipt",
    cpp: "C++",
    rb: "Ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(key); //prints all the keys
}

for (const key in myObject) {
    console.log(myObject[key]); //prints all the values 
}

// for in loop with arrays

const programming = ["js", "ruby", "py", "java"]

for (const key in programming) {
    console.log(key); //prints the indexes (keys) of array starting from 0
}

for (const key in programming) {
    console.log(programming[key]); //prints the array elements
}

/* for in loop doesn't work on maps like this:

for (const key in map) {
    console.log(key);
}

*/