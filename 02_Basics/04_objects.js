//creating objects using constructors: singleton objects
const tinderUser1 = new Object()
console.log(tinderUser1); // {}

//the output is same for both type of objects created using literal as well as constructor
const tinderUser = {}
console.log(tinderUser); // {}

tinderUser.id = "123abc"
tinderUser.name = "Saanvi"
tinderUser.isLoggedIn = false

console.log(tinderUser); //basic type of object

//nested object
const regularUser = {
    email: "saanvi.90@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Saanvi",
            lastname: "Jain"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);
//console.log(regularUser.fullname?.userfullname.firstname); 
// ? is used in optional chaining so errors can be handled in case fullname is not present when checked by the API

//combining of objects
const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b"}

const obj3 = {obj1, obj2}
console.log(obj3); //object inside object

const obj4 = Object.assign({}, obj1, obj2)
// {} is used as a target where all objects are stored
console.log(obj4);

//combining using spread operator: mostly used
const obj5 = (...obj1, ...obj2)
console.log(obj5);

//values are retrieved from DB in array of objects form
const users = [
    {
        id: 1,
        email: "saanvi@gmail.com"
    },
    {
        id: 2,
        email: "saanvi@gmail.com"
    }
    {
        id: 3,
        email: "saanvi@gmail.com"
    }
    {
        id: 4,
        email: "saanvi@gmail.com"
    }
]

//to access values: users[1].email
//for 2nd object ki email

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //gives an array of keys
console.log(Object.values(tinderUser)); //gives an array of values
console.log(Object.entries(tinderUser)); //gives an array of key-values pair (where each key-value pair is an array)

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true
//to check if a property exists in an object or not


// ........................destructuring of objects....................................

const course = {
    coursename: "js hindi",
    price: "999",
    courseInstructor: "hitesh"
} 

//methods to access properties: using '.' , by destructuring
// using '.' : course.courseInstructor

//destructuring
const {courseInstructor} = course
console.log(courseInstructor); //hitesh

//destructuring with renaming
const {coursename: CName} = course
console.log(CName); //js hindi

//API : values are obtained from backend. Earlier XML structure was used to obtain values, but now JSON is used.
//JSON is also an object where both keys and values are strings except for integer and boolean values.

    /* example:
{
    "name": "Saanvi",
    "coursename": "js in hindi",
    "price": "free"
}
    */

//fetch method: calls url to get api in the form of json, then the object can be used to retrieve data

//api can also be in the form of any array with multiple objects. This is also in JSON (JavaScript Object Notation)

   /* example:
[
   { }
   { }
   { }
]
   */
