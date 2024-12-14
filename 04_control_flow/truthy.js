const userEmail = "saanvi@gmail.com" //assumed as truthy value
const userEmail1 = [] //assumed as truthy value

if(userEmail) {
    console.log("got user email");
} else {
    console.log("no user email");
}

//falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN

// all values other than falsy values are truthy values

// truthy values: "0", 'false', " " (string with space), {}, [], function(){}

// to check for empty array
if(userEmail1.length === 0) {
    console.log("Array is empty");
}

//to ckeck for empty objects
const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}

// ** Nullish Coalescing Operator (??): used with null and undefined
// used for a special case when retrieving info from DB: to handle null or undefined values returned from the DB or to handle 2 values returned from the DB
//used to handle errors related to null and undefined
let val1;
val1 = 5 ?? 10
console.log(val1);  // 5

val1 = null ?? 10
console.log(val1);  // 10

val1 = undefined ?? 15
console.log(val1);  // 15

val1 = null ?? 10 ?? 15
console.log(val1);  // 10  (the first proper encountered value is assigned)

// ** Terniary Operator (conditional oprator)
// syntax: condition ? true : false

const iceTea = 100
iceTea <= 80 ? console.log("less than 80") : console.log("more than 80");
