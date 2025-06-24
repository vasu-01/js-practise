let score = "33";
let score1 = null;
let score2 = undefined;

console.log(typeof score); //or as a method
console.log(typeof(score));

let valueInnumber = Number(score);
let valueInnumber1 = Number(score1);
let valueInnumber2 = Number(score2);
console.log(typeof valueInnumber);
console.log(typeof valueInnumber1);
console.log(typeof valueInnumber2);

console.table([valueInnumber,valueInnumber1,valueInnumber2]);

//after conversion
//"33"=> 33
//"33abc" => NaN
//true => 1; false =>0

let isLoggedIn = 1;

let booleanIsloggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsloggedIn);
console.log(booleanIsloggedIn);

//"" => false
//"vasu"=> true

let number = 2;

let stringNum = String(number);
console.log(stringNum, typeof stringNum);

///////////////////////////////////   Operations //////////////////////////////////////////

let value = 3;
let negativeVal = -value;

console.log(negativeVal);// o/p = -3


let str1 = "hello";
let str2 = " vasu";

let str3 = str1 + str2;
console.log(str3);

console.log("1"+2); // o/p = 12
console.log(1+2+"3"); // o/p = 33
console.log("1"+2+3); // o/p = 123

console.log(null > 0 ); // o/p = false
console.log(null == 0); // o/p = false
console.log(null >= 0); // o/p = true because an equality check (==) and comparison (>, <, >=, <=) work differently. Comparisons convert null to a number, treating it as 0. That's why last one null>=0 is true and  first null >0 is false.

console.log(undefined == 0); // o/p = false for all three
console.log(undefined > 0);
console.log(undefined < 0);

//===

console.log("2"===2);

