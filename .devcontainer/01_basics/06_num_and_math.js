const score = 500
console.log(score);


const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));

const hundereds = 100000
console.log(hundereds.toLocaleString('en-IN'));


// *************** Maths *******************//

console.log(Math);
console.log(Math.abs(4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.max(4, 6, 7, 8));
console.log(Math.min(4, 6, 7, 8));

console.log(Math.random());
console.log(Math.floor(Math.random()*10) + 1);

const max = 20
const min = 10

console.log(Math.floor(Math.random() * (max - min + 1) + min))








