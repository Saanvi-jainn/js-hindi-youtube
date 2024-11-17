//answers in true or false
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1); //true
console.log("02" > 1); //true
//typescipt doesn't allow to compare different data types, but here, conversion occurs

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
// for comparisions like >, <, >=, <=, null is converted to number
// for equality check ==, it is not converted to number

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

// === is strict check, checks values striclty along with their data type
console.log("2" === 2); //false