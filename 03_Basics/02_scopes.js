
//let understand all the variables
var c =20;
if(true){
    let a = 2;      
    const b = 5;
    var c = 30;
}
// console.log(a);    //not print bcoz scope was till the closing curly braces '}'
// console.log(b);    //not print bcoz scope was till the closing curly braces
console.log(c);    //print the value even after scope and another problem is that output will be 30 instead of 20 



//similarly we do it with let
let newa = 20;
if(true){
    let newa = 2;
    console.log(newa); 
}
console.log(newa);   //output will be 2 first and then 20 not 2 like var becoz it follows global and local scope

//nested scope
function one(){
    const userName = "Vasu";

    function two(){
        const website = "youtube";
        console.log(userName);
        
    }
    console.log(website);  //return error becoz it's scope till two() function closing braces
    two();
}

// one();


if(true){
    const username = "vasu";
    if(username === "vasu"){
        const website = "youtube";
        console.log(username+website);
    }
    // console.log(website);   //return error same reason as of line 32
}
// console.log(username);   //return error becoz scope of username variable is inside if now outside if



//concept of hoisting (little intro of example)

console.log(addone(4));   //here it will give ouput as 5
function addone(num){
    return num+1;
}

// console.log(addtwo(4));    //here it will give error that intilization not done while above was giving correct output and only difference is in declaring function in this we take function output in variable
// const addtwo = function(num){
//     return num +2;
// }


//Immediately Invoked Function Expressions (IIFE)

//named IIFE
(function fn(){
    console.log(`DB connected`);
})();

//or
//unamed IIFE
((name) => {
    console.log(`DB Connected with ${name}`);
}) ('vasu')