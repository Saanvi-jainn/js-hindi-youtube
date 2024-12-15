// map: also uses a callback function and return some value as per the required execution

// ** Everything is computed and returned in map, while only selective values are returned in filter according to the condition specified.

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers.map( (num) => num + 10 )

console.log(newNums); 

// chaining : using multiple methods one after the other 
// myNumbers.map().map().filter()

const newNums2 = myNumbers
                        .map( (num) => num * 10 )
                        .map( (num) => num + 1)
                        .filter( (num) => num >= 40)

console.log(newNums2);
