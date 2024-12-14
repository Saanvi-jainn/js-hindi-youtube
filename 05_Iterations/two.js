// while loop

let index = 0

while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2
}

// while loop with array 

let myArray = ["flash", "superman", "batman"]

let arr = 0
while (arr < myArray.length) {
    console.log(myArray[arr]);
    arr = arr + 1
}

// do-while loop : runs atleast once

let score = 1

do {
    console.log(`score is ${score}`);
    score++
} while (score <= 10);
