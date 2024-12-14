// to check one value with multiple values, switch is used

/* 
switch (key) { 
case value: 
     break;

default:
    break;
   }
*/

const month= 3

switch(month) {
    case 1: 
       console.log("Jan");
       break;
    case 2: 
       console.log("Feb");
       break;
    case 3: 
       console.log("March");
       break;
    case 4: 
       console.log("April");
       break;
    case 5: 
       console.log("May");
       break;
    default:
        console.log("incorrect entry");
        break;
    }

//fallthrough situation occurs when break is missing, where all the remaining cases are executed except default case