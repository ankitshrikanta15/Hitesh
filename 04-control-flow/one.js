//if

if(true) { //2==2

}

if(false) {
  //not execute
}

const isUserLoggedIn = true;
const temperature = 41;

// if (temperature < 50) {
//   console.log("less than 50");
// } else {
//   console.log("greater than 50")
// }

// if (3 != 2) {
//   console.log("executed");
// }


// 3 != 2

// <, >, <=, >=, ==, !=, ===, !== (negative checking)


// const score = 200;

// if (score > 100) {
//   let power = "fly";
//   console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


const balance = 1000;

// if (balance > 500) console.log("test") ,console.log("test2"); not a good practice

// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1200");
// }


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
  console.log("Allow to buy course");
} 

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("user Logged In");
}

&& - all condition must be true to execute
|| - at least one condition must be true to execute
