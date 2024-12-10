// IIFE: Immediately Invoked Function Expressions 
//these are the functions that are immediately invoked

//named IIFE

(function chai() {
    console.log(`DB connected`);
})();

//IMP: IIFE is used to remove the pollution caused by the global scope variables

//iife can also be used with arrow function

( () => {
    console.log(`DB connected two`);
} )();

//with parameters

( (name) => {
    console.log(`DB connected two ${name}`);
} )('saanvi');

//semicolon is required in IIFE as the execution of the function is not stopped automatically, so explicitly ';' is used. If two IIFE are written simultaneously without ';' then the execution of second IIFE doesn't start which results in error