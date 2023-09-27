const name = "Rajeev"
const repoCount = 30

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Rajeevkumar")

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase()); 
console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));

console.log(gameName.substring(0,4));
console.log(gameName.slice(-9, 4));

const newString = "    rajeev      "
console.log(newString);
console.log(newString.trim());

const url = "https://rajeev.com/rajeev%20%kumar"

console.log(url.replace('%20%', '-'));

console.log(url.includes("rajeev"));

const newStringOne = "rajeev-kumar"
console.log(newStringOne.split("-"));