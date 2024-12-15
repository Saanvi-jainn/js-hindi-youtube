// reduce: uses a callback function with two vales: accumulator (acc) (updates value at each loop cycle for all elements(takes its first value from initialValue )) and currentValue (the elements of the array)

//mostly used in shopping cart 

const myNums = [1, 2, 3, 4]

const myTotal = myNums.reduce( function (acc, currentValue) {
    console.log(`accumulator: ${acc} and cuurent value: ${currentValue}`);
    return acc + currentValue
}, 0)

// initial value is written after the function using a comma

console.log(myTotal); // 6

// similarly using arrow function:
// const myTotal2 = myNums.reduce( () => (), 0)

const myTotal2 = myNums.reduce( (acc, currentValue) => acc + currentValue, 0)

console.log(myTotal2);


// using real world example:

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const priceTotal = shoppingCart.reduce( (acc, item) => acc + item.price,0)

console.log(priceTotal);
