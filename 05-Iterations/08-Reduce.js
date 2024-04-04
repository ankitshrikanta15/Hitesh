// reduce 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10];

// const 
// const myTotal = myNums.reduce(function(acc, currval) {
//   console.log(`acc: ${acc} and currval: ${currval}`);
//   return  acc + currval
// }, 0)

// arrow function

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
  {
    itemName: "js course",
    price: 299
  },
  {
    itemName: "python course",
    price: 999
  },
  {
    itemName: "DSA course",
    price: 4999
  },
  {
    itemName: "web devlopment course",
    price: 13299
  },
]

const totalPrice = shoppingCart.reduce( (acc, item) =>acc + item.price, 0)

console.log(totalPrice);
