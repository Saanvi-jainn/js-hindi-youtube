let score = "33"
let score2 = "33abc"
let score3 = null
let score4 = undefined

//conversion to number =>
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)  //data type conversion
console.log(typeof valueInNumber); 

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2); //number
console.log(valueInNumber2); //NaN

let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber2); //number
console.log(valueInNumber3); //0

let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber2); //number
console.log(valueInNumber4); //NaN

//for any boolean value converted to number: true=1 , false=0
//if any string cannot be converted to number, it is NaN (not a number), but its type is number

//conversion to boolean =>
let flag = 1
let BooleanValue = Boolean(flag)
console.log(BooleanValue);  //true

// 1 => true ; 0 => false
// "" => false
// "saanvi" => true

//conversion to string =>
let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber); //33
console.log(typeof stringNumber); //string

// ********************* operations *********************

let value = 3
let negValue = -value
console.log(negValue); //-3

console.log(2+2); //add
console.log(2-2); //subtract
console.log(2*2); //multiply
console.log(2**3); //power
console.log(2/3); //divide
console.log(2%3); //remainder

//concatenation of strings
let str1 = "hello"
let str2 = "saanvi"
let str3 = str1 + str2 
console.log(str3);

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32

//prefer not to use this conversion
console.log(+true); //a type of conversion to number: output => 1
console.log(+""); // conversion to number: output => 0

//prefix operator: ++a
//postfix opeartor: a++