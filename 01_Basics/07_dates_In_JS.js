// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970

let myDate = new Date()  // instance of the object Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate); // Object

let myCreatedDate = new Date(2023, 0, 23) 
console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023
// months start with 0 in JS

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3) 
console.log(myCreatedDate2.toLocaleString()); // 23/1/2023, 5:03:00 am

let formattedDate = new Date("2023-01-14") // DD-MM-YY format, the format can be changed by swapping MM,DD,YY positions
console.log(formattedDate.toLocaleDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp); // o/p in miliseconds
console.log(formattedDate.getTime()); //converts date to miliseconds for easy comparing of dates
console.log(Math.floor(Date.now()/1000)); // to convert miliseconds into seocnds; floor value is taken to avoid decimal value

let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1); // add 1 since months start from 0 in JS
console.log(newDate.getDay()); // starting from Monday:1

// toLocaleString() function can be customized to print dates accordingly
let updatedDate = newDate.toLocaleString('default', {
    weekday: "long" })

console.log(updatedDate); // Saturday
