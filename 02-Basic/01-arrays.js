//array

const myArr = [0, 2, 3, 4, 0, 10, 55, "ankit"]
const myHeros = ["spiderman", "captain america", "Iron man"]

const myArr2 = new Array(1, 2, 4, 6)

//array are resizeable in javascript

// console.log(myArr[1])

// deep copy and shallow copy

//------------------------------------------------

//array methods

// myArr.push(6) //push a number at last
// myArr.push(77)
// myArr.pop() //remove a number at last

// myArr.unshift(99) //add a number at beignning
// myArr.shift()   remove nmber at beginning

// console.log(myArr.includes(10));
// console.log(myArr.indexOf(10));

// const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr) // type of is now String converted to

//slice, splice 

"important interview question"

console.log("A", myArr);

const myn1 = myArr.slice(1, 3); //slice doesnt manipulate the original array
console.log(myn1);
console.log("B", myArr)

const myn2 = myArr.splice(1, 3); //it manipulate the original array
console.log("C", myArr)
console.log(myn2);

