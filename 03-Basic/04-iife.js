//Immediately Invoked Function Expression (IIFE)

(function chai() {
  //named IIFE
  console.log(`DB Connected`);
})();

// chai();

// ()() - function desination and other is execuation call its call iffe
//global scope ke pollution se problem hoti hai kai baar toh us global scope ke jo bhi variable hain ya jo bbhi declaration hain uske polution ko hatane ke liye iffe ka use karte hain

// ";" IS IMPORTANT AT THE END IN IIFE to end the expression twll them

((name) => {
  //unnamed IIFE with parameter passed
  console.log(`DB CONNECTED TWO ${name}`);
})('Ankit');

//when two IIFE write please end with semicolon ;