let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// Sun Feb 25 2024 13:40:19 GMT+0530 (India Standard Time)
// 2024-02-25T08:10:19.658Z
// 2024-02-25T08:10:19.658Z
// Sun Feb 25 2024
// 25/2/2024
// 25/2/2024, 1:40:19 pm

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23,  5, 3)
let myCreatedDate = new Date("2023-01-24")
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())


let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()

newDate.toLocaleString('default',{
   weekday: "long",
})

console.log(newDate)