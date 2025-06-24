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