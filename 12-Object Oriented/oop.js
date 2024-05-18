const user = {
  username: "Ankit",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function() {
    // console.log("got user details from database");
    console.log("Username: ",this.username);
    // to determaine the current context of the value this kwyword is used to specify which specified context you refering. wiithout this keyword we cant print those username  we need to specify you need to take username from above usining this
    // console.log(this);
  }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


// const promiseOne = new Promise() //constructor function
// const date = new Date() // constructor function

function User(username, loginCount, isLoggedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greetings = function(){
    console.log(`Welcome ${this.username} to the JS`);
  }

  return this // not menditory by default it is run
}

const userOne  = new User("Ankit", 33, true);
const userTwo = new User("patel", 12, false); 
// we need to use new keyword so that the data dont overwrite with each other and it will create a new field 
// when we use new keyword an empty Object is created which is called instances
// the constructor function called using new keyword its packed all the arguments and give it to user
// this keyword inject all the arguments to it
// it will give us the result

console.log(userOne.constructor);
console.log(userTwo);


