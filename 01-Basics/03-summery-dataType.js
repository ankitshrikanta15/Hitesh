//primitive 
// 7 types: String, Number,  Boolean, null, undefined, Symbol, BigInt

//it is a dynamic type language we dont need to specift the value of it type it automatically detetct or  Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables a type at runtime based on the variable's value at the time.
const score = 100;
const scoreVlaue = 100.3
const isLoggedIn = false;
const outsideTemp = null;
let userEmail; //undefined
let userEmails = undefined;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id);
console.log(anotherId);

const bigNumber = 55556646646464664646464n //BigInt

//non-primitive or reference

// Objects(important), Array, Functions

const heros = ["shaktiman", "naagraj", "doga"] //array

let myObj = {           //object
    name: "ankit",
    age: 22,
}

const myFunction = function(){      //function
    console.log("Hello, World!!")
}

//how to find out data type
console.log(typeof bigNumber)
console.log(typeof outsideTemp)

// undefined = "undefined"
// null = "object"
// boolean = "same"
// string = "same"

//                  Type                                   typeof

// i)             Number                               number
// ii)            String                                   string
// iii)           Boolean                               boolean
// iv)           Bigint                                   bigint
// v)            Symbol                                symbol
// vi)           Null                                      object
// vii)          Undefined                           undefined

// i)               Object                                object
// ii)              Array                                  object
// iii)             Function                            function(object)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//memories 

//Stack (Primitive(Copy)), Heap (Non-Primitive(Reference))

//in stack memory you will get a copy of your code or variable you declared.

let myYoutubeName = "ankitji"
let anotherName = myYoutubeName 

anotherName = "patelji"

console.log(myYoutubeName) //ankitji
console.log(anotherName) //patelji

//in Heap you will get a reference of the variable  when you change in real code the reference will also changed.

let userOne = {
    email: "ankit@google.com",
    upi: "ankit@ybl"

}

let userTwo = userOne //userone and usertwo reference to the same object because of that if we change one value then other valur also changed because it connected to each other in heap memory 

userTwo.email = "hello@gmail.com"

console.log(userOne.email) //hello@gmail.com
console.log(userTwo.email) //hello@gmail.com