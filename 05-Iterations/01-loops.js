// for

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
  
// }

for (let i = 0; i < 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is best Number");
  }
  // console.log(element);
}

for (let i = 0; i <= 10; i++) {
  // console.log(`Outer loop value: ${i}`);
  for (let j = 0; j <= 10; j++) {
    // console.log(`Inner loop value: ${j} and outer loop: ${i}`);
    // console.log(i + '*' + j + ' = ' + i*j); //print table
    
  }
  
}

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  // console.log(element);
}

// break and continue

for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    // console.log(`Detected 5`);
    break;
  }
  // console.log(`Value of i is ${i}`);
  
}

for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log(`Detected 5`);
    continue; // maaf kar dijiye for once.
  }
  console.log(`Value of i is ${i}`);
  
}