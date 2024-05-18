//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//promise is an Object.
// Earlier when we dont have Promise in JS we use libraries like Q and BlueBird later they integrated that libraries in JS in ES6 vesrsion. {NodeJS support}

// const promiseOne = new Promise(function(resolve, reject){});
const promiseOne = new Promise(function(resolve, reject){
  //Do an async task
  //DB calls, cryptography, network call
  setTimeout(function(){
    console.log("async task in complete.");
    resolve(); //it willl now resolve and run the promise part (.then) bu using resolve() we connect it with bellow .then part
  }, 1000);
});

promiseOne.then(function(){ //inside .then we get a function  and it has direct connection with resolve
  console.log("Promise consumed");
}); // it connection with resolve its receive a callback


new Promise(function(resolve, reject){
setTimeout(function(){
  console.log("Async task 2");
  resolve();
}, 1000)
}).then(function(){
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve({username: "Chai", email: "ankit@chai.com"}) //whichever parammeter you pass inside the resolve you can access the things in the .then section
  }, 1000)
});

promiseThree.then(function(user){
console.log(user);
});

const promiseFour = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = true;
    if(!error) {
      resolve({username: "Ankit15", password: "123"})
    } else {
      reject('ERROR: something went wrong')
    }
  }, 1000)
});

// promiseFour.then().catch()

promiseFour
.then((user) => {
  console.log(user);
  return user.username; //it will return the user's username
 })
 .then((username) => { // uper wle .then se retuen wli value yeha aayagi
  console.log(username);
 })
 .catch(function(error){
  console.log(error);
 }) //chaining
 .finally(() => console.log("The Promise is Either resolve or Rejected")); //it will execute default at one time it goona be executed.


 const promiseFive = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = true;
    if(!error){
      resolve({username: "ankitPatel", password: "123@123"})
    } else {
      reject("ERROR: something went Wrong")
    }
  }, 1000)
 });

async function consumePromiseFive() {
try {
  const response  = await promiseFive;
  console.log(response);
} catch (error) {
  console.log(error);
}
}

consumePromiseFive();

//try catch syntax 

// async function getAllUsers() {
//   try {
//     const response  = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ",error);
//   }
// }

// getAllUsers();

//same code using .then .catch

fetch('https://api.github.com/users/ankitshrikanta15')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
})
.catch((error) => console.log(error))

// fetch is a exciting features in Node JS it changed how we send the web request
//important 

//A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.

//incase of 404 error the error eith be show in response not in reject because it is server side error not at our end.

//fetch has an special queue also a Micro task Queue/Priority Queue which will execute faster it will add on the call stack first (Priroity)

 