const marvelHeros = ["thor", "Doctor Strange", "Ant man", "Blackwidow"];
const dcHeros = ["superman", "flash", "batman", "wonder women"];

// marvelHeros.push(dcHeros)

// console.log(marvelHeros);

//  const allHeros = marvelHeros.concat(dcHeros); //it used to merge to or more array
//  console.log(allHeros);

//kach ka glass lijiye drop kar dijiye spread ho jayegaaa

const all_new_heros = [...marvelHeros, ...dcHeros]

// console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array) //combine into one

console.log(Array.isArray("ankit"))
console.log(Array.from("ankit"))
console.log(Array.from({name: "ankit"})) //empty array agar from nai bana payega isko array //intresting case

let score1 = 100;
let score2 = 200;
let score3 = 400;
console.log(Array.of(score1, score2, score3)) //return set of element