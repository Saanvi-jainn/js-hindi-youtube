// for each : is a property of arrays, has callback functions(functions that do not have a name), function parameter is the iterator for the loop, function body contains the opration to be performed in the loop

const coding = ['js', 'ruby', 'java', 'cpp']

coding.forEach( function (item) {
    console.log(item);  //prints all array elements
} )

// arrow function can also be used in for each loop

coding.forEach( (item) => {
    console.log(item);
} )

// for each loop if function is defined beforehand

function printMe(item) {
    console.log(item);
}

coding.forEach(printMe) //reference of function is passed

//multiple parameters in for each loop

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr); //ptints each array element with its index and entire array
} )


//for each loop on array of objects

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName); //prints all the language names from objects in the array
})
