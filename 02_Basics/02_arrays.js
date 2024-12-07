const marvel_heroes = ["thor", "ironman", "spiderman"]
const marvel_heroes1 = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// merging arrays using push()
marvel_heroes.push(dc_heroes)
console.log(marvel_heroes); // array inside an array
console.log(marvel_heroes[3][1]); //flash

//merging arrays using concat()
const allHeros = marvel_heroes1.concat(dc_heroes) //both arrays are merged into a new array
console.log(allHeros);

//merging arrays using spread operator [...]
const all_new_heros = [...marvel_heroes1, ...dc_heroes]
console.log(all_new_heros);


//flat method: for concatenating all subarray elements into a single array. The depth parameter decides upto which subarray the elements are to be concatenated
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
//Infinity depth: all the subarrays are merged into a single array
console.log(real_another_array);

//to check if any data is an array
console.log(Array.isArray("Saanvi")); //false

//to convert the given data to array
console.log(Array.from("Saanvi")); // [ 'S', 'a', 'a', 'n', 'v', 'i' ]
console.log(Array.of("Saanvi")); // [ 'Saanvi' ]

// INTERESTING: array cannot be created from key-value pairs. Either can be formed from only key or only values.
console.log(Array.from({name: "Saanvi"})); // [] (empty array as o/p)

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]