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



