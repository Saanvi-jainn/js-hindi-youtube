//array specific loops

// for of loop

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

// for of loop with strings
const greetings = "Hello world!"

for (const greet of greetings) {
    console.log(`each char is ${greet}`);
}

// Maps : has key value pairs like objects, but remembers the original insertion order of keys unlike the object

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

console.log(map);
/* Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
} */

//keys cannot be repeated in maps 

for (const key of map) {
    console.log(key); //prints 3 arrays of 2 values each: key and value
}

for (const [key, value] of map) {
    console.log(key, '-', value); //destructures the array
}

// for iterating on objects, this method of for of loop doesn't work
