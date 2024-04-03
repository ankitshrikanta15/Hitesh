const userEMail = [];

if (userEMail) {
  console.log("got user email");
} else {
  console.log("dont have user email");
}

// falsy values 

// false, 0, -0, BigInt 0n, "", '', null, undefined, NaN, document.all

// truthy values 

// "0", 'false', " ", [], {}, function() {} (empty function), 


// if (userEMail.length === 0) {
//   console.log("Array is empty");
// }

const emptyObj = {}; // to check if it is a empty object. 

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}


// false == 0
// true
// false == ''
// true
// 0 == ''
// true

// Nullish Coalescing Operator (??) only for null and undefined its helps us to deal with error newly introduced.

let val1;
// val1 = 5 ?? 10; //5
// val1 = null ?? 10 //10
// val1 = undefined ?? 15 //15
val1 = null ?? 10 ?? 10 //10

console.log(val1);

// Terniary Operator

// condition ? true : false

// const iceTeaPrice = 100;

// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80");