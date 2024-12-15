const coding = ['js', 'ruby', 'java', 'cpp']

//for each loop never returns a value

const values = coding.forEach( (item) => {
    console.log(item);
    return item  //doesn't return any value
})

console.log(values); //output- undefined

// filter : takes a callback function, retrns values based on a specific condition, applied on data received from DB to retrieve useful information

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => num > 4 )

// OR 

// const newNums = myNums.filter( (num) => {
//   return num > 4
// } ) 

console.log(newNums);


// if the same is to be done using for each loop:

const newNums1 = []

myNums.forEach( (num) => {
    if(num > 4) {
        newNums1.push(num)
    }
})

console.log(newNums1);

// sample for retrieving info from DB

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ]

let userBooks = books.filter( (bk) => bk.genre === 'History')

console.log(userBooks); // prints all books with history genre

userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})

console.log(userBooks);  // prints all history books published in or after 1995