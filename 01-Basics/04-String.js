//String declaration {string is the most powerful in any language}
const name = "ankit "
const repoCount = 50

// console.log(name + repoCount);
// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`) //it will convert the name to uppercase command

//Other way to declare a String

const gameName = new String("GTA-5");

// console.log(gameName[0]); //access the key
// console.log(gameName.__proto__) //its gives object

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2)) //A
// console.log(gameName.indexOf("A")) //2

const newString  = gameName.substring(0, 3); //last value not include GTA onlt 3 value print 0 1 2
console.log(newString)

const anotherString = gameName.slice(-1, 5)
console.log(anotherString)

const newStringOne = "  ankit   "

console.log(newStringOne);
console.log(newStringOne.trim()); //it remove the start and end spaces

const url = "https://ankit.com/anki%20patel" //to remove the space
console.log(url.replace('%20', "-"))

console.log(url.includes('anki'))

// convert the string to array 

console.log(gameName.split("-")); //[ 'GTA', '5' ]


//practise

let apple = 50

console.log(apple.toString());