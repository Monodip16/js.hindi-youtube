const name = "Monodip"
const repoCount = 1

//console.log(name + repoCount + "value");

console.log(`My name is ${name} and my repo count is ${repoCount}`);

const gameNumber = new String("Mono-hc")

console.log(gameNumber[0]);
console.log(gameNumber.__proto__);

console.log(gameNumber.length);
console.log(gameNumber.toUpperCase());
console.log(gameNumber.charAt(2));
console.log(gameNumber.indexOf('o'));

const newString = gameNumber.substring(0, 2)
console.log(newString);

const anotherString = gameNumber.slice(-7, 3)
console.log(anotherString);

const newStringOne = "  Mono  "
console.log(newStringOne);
console.log(newStringOne.trim());
 
const url ="https://google.com/monodip%20das"

console.log(url.replace('%20' , '-'));


