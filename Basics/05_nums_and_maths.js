
///////////////////////////////////// Numbers ////////////////////////////////////
const score = 20;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 23.5332;

console.log(otherNumber.toPrecision(2));

const num = 100000;
console.log(num.toLocaleString('en-IN'));


///////////////////////////////// Maths /////////////////////////////////////

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(2,4,6,9));

console.log(Math.random()); //b/w 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()* (max - min +1))+min);





