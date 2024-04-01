// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);
// console.log(2 === 1);

console.log("2" > 1); //true it will conert the string to number

console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true

//the reason is that an equality check == and comparison > < >= <= worl differently.
//comparison convert null to a number, treating it as 0.
//thats why(3)null >=0 is true and (1) null > 0 is false.

console.log(undefined > 0) //false
console.log(undefined == 0) //false
console.log(undefined >= 0) //false

//avoid the above types of conversion never use it if you use console log it first

//=== strict check

console.log("2" === 2); //false
console.log("2" == 2); //true