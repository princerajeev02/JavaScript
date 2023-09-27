// Dates

let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());

// let newCreatedDate = new Date(2023,1,24,5,3)
// console.log(newCreatedDate.toLocaleString());

//  let newCreatedDateOne = new Date("01-14-2023")
// // console.log(newCreatedDateOne.toLocaleString());

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(newCreatedDateOne.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDay() + 1);

newDate.toLocaleString('default',{
    weekday: "long"
})

console.log(newDate);