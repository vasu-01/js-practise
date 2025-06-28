//if
const score = 200;

if(score > 100){
    let  power = "fly";
    console.log(`User Power: ${power}`);
}

// console.log(`User power: ${power}`);  //not accessible due to scope


//shorthand way
const balance = 1000;

if(balance > 500) console.log("test"); //implicit scope



//nesting
if(balance > 500){
    console.log("more than 500");
}
else if(balance > 750){
    console.log("less than 1000");
}
else{
    console.log("less than 1200");
}


//use of if else in multiple checking

const userLoggedIn  = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course");
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
}