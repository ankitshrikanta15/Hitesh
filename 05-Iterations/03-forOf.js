// for of loop
//array specific loop

// ["", "", ""]
// [{},{},{}]

const arr = [1,2,3,4,5,6,7]

for (const num of arr) {
  // console.log(num);
}

const greetings = "hello World!!"

for (const greet of greetings) {
  if (greet == " ") {
    // console.log("space");
    break;
  }
  // console.log(`Each char is ${greet}`);
}


// Maps

const map = new Map(); //vales are unique
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('UAE', "United Arab Emirates")

for (const key in map) {
  console.log(key);
}

// console.log(map);

for (const [key, value] of map) {
  console.log(key, ':-', value);
}

const myObject = {
  game1: 'NFS',
  game2: 'GTA'
}

// for (const [key, value] of myObject) {
//   console.log(key, ':-', value);
// }  //not work
