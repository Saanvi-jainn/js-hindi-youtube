// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
}

// nested for loop

for (let i = 0; i <= 10; i++) {
    console.log(`Outer Loop Value ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        console.log(`Inner Loop Value ${j} and Outer Loop Value ${i}`);
        
    }
}

//for loop on array
let myArray = ["flash", "batman", "superman"]

for (let index = 0; index < myArrayarray.length; index++) {
    const element = myArrayarray[index];
    console.log(element);
}

// break: exits the loop if a specific condition is reached
// continue: skips the current iteration execution based on a condition and continue with the execution of the next iteration
