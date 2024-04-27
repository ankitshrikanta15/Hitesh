//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//promise is an Object.

// const promiseOne = new Promise(function(resolve, reject){});
const promiseOne = new Promise(function(resolve, reject){
  //do an async task
  //DB calls, cryptography, network call
  setTimeout(function(){
    console.log("async task in complete.");
    resolve() //it willl now resolve and run the promise part
  }, 1000)
})

promiseOne.then(function(){ //inside .then we get a function
  console.log("Promise consumed");
}) // it connection with resolve its receave a callback


new Promise(function(resolve, reject){
setTimeout(function(){
  console.log("async task 2");
  resolve()
}, 1000)
}).then(function(){
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve({username: "CHai", email: "chai@chai"}) //whichever parammeter you pass inside the resolve you can access the things in the .then section
  }, 1000)
});

promiseThree.then(function(user){
console.log(user);
});

const promiseFour = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = false;
    if(!error) {
      resolve({username: "Ankit", password: "123"})
    } else {
      reject('ERROR: something went wrong')
    }
  }, 1000)
});

// promiseFour.then().catch()

promiseFour
.then((user) => {
  console.log(user);
  return user.username;
 })
 .then((username) => {
  console.log(username);
 })
 .catch(function(error){
  console.log(error);
 }) //chaining
