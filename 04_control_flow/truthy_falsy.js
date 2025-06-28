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