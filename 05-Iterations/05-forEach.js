// for Each

const coding = ['js', 'ruby', 'java', 'pyhton', 'cpp'];

// coding.forEach(function(val){
//   console.log(val);
// })                                 basic function

// coding.forEach( (val) => {
//   console.log(val);
// } )                                 arrow function

// function printMe(val){
//   console.log(val);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// })

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js"
  },
  {
    languageName: "c++",
    languageFileName: "cpp"
  },
  {
    languageName: "Python",
    languageFileName: "py"
  },
]

myCoding.forEach( (val) => {
  console.log(val.languageName);
} )