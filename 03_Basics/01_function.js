function addTwoNumbers(num1,num2){
    console.log(num1+num2);
}

const result = addTwoNumbers(3,5);
console.log(result);                // in result you'll get undefined bcoz no return value was in function

//so to store value in variable after calling we should use return
function addNumbers(number1, number2){
    // let result = number1 + number2;
    // return result;
    //or
    return number1 + number2;
}
const res = addNumbers(2,5);
console.log(res);



// function loginUserMessage(userName){
//     return `${userName} just logged in`;
// }

// const userMsg = loginUserMessage("Vasu");
// console.log(userMsg);

//now suppose no value or argument passed in it
function loginUserMessage(userName){
    if(!userName){
        console.log("Please provide username");
        return;
    }
    return `${userName} just logged in`
}
console.log(loginUserMessage());

//or you can provide default value to username
function loginUserMsg(userName = "user"){
     if(!userName){
        console.log("Please provide username");
        return;
    }
    return `${userName} just logged in`
}
console.log(loginUserMsg());      // it will return  "user just logged in " instead of " Please provide username and undefined"



//#use of rest it looks similar to spread but work differently at different place
function calculateCartPrice(...num1){ // here rest will add all elements in single array like [200,400,300]
    return num1;
}
console.log(calculateCartPrice(200,400,300));

function calCartPrice(val1,val2,...num1){
    return num1;
}
console.log(calCartPrice(200,400,500,2000)); //o/p:- will be [500,2000] bcoz val1 have value 200, val2 have vlaue 400 and other will be in single array



//#how to pass object in function
const user = {
    userName :"vasu",
    price:124
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
}
handleObject(user);
//or we can direct pass object also
//handleObject({
// userName:"sam",
// price:399
// });



//#passing array in function
const array = [200,300,500,5004];

function returnSecondValue(getArray){
    return getArray[2];
}

console.log(returnSecondValue(array));
