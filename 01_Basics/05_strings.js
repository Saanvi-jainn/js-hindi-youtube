const name = "saanvi"
const repoCount = 10

console.log(name + repoCount + "Value");
//outdated syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//modern syntax, more readable
//any method using '.' operator can also be used with variables when using backtick, eg- .uppercase

//another way of string declaration
const gameName = new String("saanviii07")
//length property and other properties of string can be used here. here, type:object

console.log(gameName[0]); // s
console.log(gameName.__proto__); // {}

console.log(gameName.length); // 10
console.log(gameName.toLocaleUpperCase()); //SAANVIII07
console.log(gameName.charAt(5)); // i
console.log(gameName.indexOf('n')); // 3

const FullName = "Saanvi-Jain"
const First = FullName.substring(0,6)
console.log(First); // Saanvi

const newName = FullName.slice(-10,6) //negative values can be used
console.log(newName);

const newstringOne = "  saanvi    "
console.log(newstringOne);
console.log(newstringOne.trim());

const url = "https://saanvi.com/saanvi%20jain"
console.log(url.replace('%20','-'));
console.log(url.includes('saanvi'));

console.log(FullName.split('-')); //string is split based on separator and converted to array