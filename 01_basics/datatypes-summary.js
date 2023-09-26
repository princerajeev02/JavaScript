// primitve 
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference type(Non primitive)
// Arrays, Objects, Functions  

//javaScript is dynamically typed language, no require to give type
// of variables

// const id = Symbol('123')
// const anotherId = Symbol('123')  // not same as id because wrapped into Symbol that made them unique

// console.log(id === anotherId);

const bigNumber = 3423423042832382244242n

console.log(typeof bigNumber);

const num = 2.44
console.log(typeof num);


//Reference (Non primitive)

//Array, Objects, Functions

const heros = ["Shaktiman", "naagraj", "doga"];

let myObj = {
    name : "rajeev",
    age: 22
}

const myFunction = function(){
    console.log("hello World");
}