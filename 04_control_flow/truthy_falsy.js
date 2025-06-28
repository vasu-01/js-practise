//here truthy and fasly values means assuming true or false
const userEmail = [];

if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

//falsy values are:
//--> false, 0, -0, BigInt 0n, "", null, undefined, NaN

//and all others are truthy values like
//--> "0", 'false', " ",[] , {}, funtions(){} etc.



//how to detect array is empty or not 
if(userEmail.length===0){
    console.log("Array is empty");
}

//how to detect object is empty or not 
const emptyObj = {};

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

//Nullish Coalescing Operator (??): null undefined

let val1;        
val1 = 5 ?? 10;    //generally first value comes 
val1 = null ?? 10; //it's like a null/undefined checker if any value then assign that value instead of null otherwise assing null
val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;
console.log(val1);


//Terniary operator

// condition ? true : false

const iceTeaPrice = 39;
iceTeaPrice >= 30 ? console.log("more than 30") : console.log("less than 30");

