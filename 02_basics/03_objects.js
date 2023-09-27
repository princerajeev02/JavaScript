// singleton
// Object.create

const mySym = Symbol("key1")


//objects literals
const jsUser = {
    name: "Rajeev",
    "full name": "Rajeev Kumar",
    [mySym]: "myKey1",
    age: 18,
    location: "patna",
    email: "rajeev@gamil.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]); //if full name in s=object declared as object then only square use to print it not dot
// console.log(jsUser[mySym]);

// jsUser.email = "rajeev@chatgpt.com"

// Object.freeze(jsUser)
// jsUser.email = "rajeev@mcrosoft.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
}

// console.log(jsUser.greeting);
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`)
}

console.log(jsUser.greetingTwo())