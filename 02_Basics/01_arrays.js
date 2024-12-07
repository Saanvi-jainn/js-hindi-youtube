const myArr = [1,2,3,4,5]
// elements can be of same or different type in the array
// arrays are resizeable in JS

const myHeros = ["shaktiman","ironman"]
const myArr2 = new Array(1,2,3,4)

console.log(myArr[0]);

// array-copy operation creates shallow copy of array: array that share the same reference, so the changes in the copy will be reflected in the original array

// Array methods
myArr.push(6) //add value to the last in the array
myArr.push(7) //add value
myArr.pop() //removes last element from array
console.log(myArr);

myArr.unshift(9) // add element to starting of array: index 0
myArr.shift() //removes the first element from array
console.log(myArr);

console.log(myArr.includes(5)); //boolean type o/p: true
console.log(myArr.indexOf(5)); //o/p: 4
console.log(myArr.indexOf(10)); //o/p: -1

const newArr = myArr.join()
// adds all the elements of the array into a string separated by a commma or separator

console.log(myArr); // [ 1, 2, 3, 4, 5, 6 ]
console.log(newArr); // 1,2,3,4,5,6
console.log(typeof newArr); // string

// slice and splice
console.log("A", myArr); // [ 1, 2, 3, 4, 5, 6 ]

const myn1 = myArr.slice(1,3)  //index 3 not included
console.log(myn1);  // [ 2, 3 ]
console.log("B", myArr);  // [ 1, 2, 3, 4, 5, 6 ]

const myn2 = myArr.splice(1,3) //index 3 is included
console.log(myn2);  // [ 2, 3, 4 ]
console.log("C", myArr);  // [ 1, 5, 6 ]

// NOTE: slice doesn't change the original array, while splice manipulates the original array.