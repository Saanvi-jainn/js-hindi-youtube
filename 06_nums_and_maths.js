const score = 400 //implicitly number type
console.log(score);

const balance = new Number(100) //explicitly defined number
console.log(balance);
//methods of number can be used

console.log(balance.toString().length); //converts to string to read length
console.log(balance.toFixed(2)); //precision value after decimal

const otherNum = 23.565879
console.log(otherNum.toPrecision(3)); //no of digits to get in o/p

const hundreds = 1000000
console.log(hundreds.toLocaleString()); //comma separated number (US standard)
console.log(hundreds.toLocaleString('en-IN')); //according to Indian number system

/* Other methods :
    .MAX_VALUE
    .MIN_VALUE
    .MAX_SAFE_INTEGER
    .MIN_SAFE_INTEGER */

//++++++++++++++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++++++

console.log(Math); //Maths library comes along with JS . Its Type : Object

// Methods ----
console.log(Math.abs(-4)); // Converts +ve / -ve integer values to positive
console.log(Math.round(4.3)); // Output: 4
console.log(Math.round(4.6)); // Output: 5
console.log(Math.ceil(4.2)); // Output: 5 (gives top value)
console.log(Math.floor(4.9)); // Output: 4 (gives bottom value)
console.log(Math.min(4,3,6,8)); // Output: 3
console.log(Math.max(4,3,6,8)); // Output: 8
console.log(Math.random()); // Gives random value between 0 & 1 in decimals

// Math.random() tricks -----
console.log(Math.random()*10);
console.log(Math.random()*10 + 1); // assures that values are atleast 1 & more than 1
console.log((Math.random()*10) + 1); // To avoid any BODMAS rule miscalculation

// ---- Trick to randomize value between range ----
const min = 10
const max = 20
const randomValue = Math.floor((Math.random() * (max - min + 1)) + min)
console.log(randomValue);