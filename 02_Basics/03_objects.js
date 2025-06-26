//object literals

const { useReducer } = require("react");

const mysystem = Symbol("key1"); //declaration of symbol

const user = {
    name:"Vasu",
    "full name":"Vasu Kumar",
    age:20,
    location:"UP",
    email:"vasu@gmail.com",
    isLoggedIn:false,
    lastLoggedInDays:["Monday","Saturday"],
    // mysystem:"mykey1"//we can't use symbol like this in objects because when you check it type it'll return string instead of symbol
    [mysystem]:"mykey1" // this is the proper syntax for using symbol in objects
}

console.log(user.email);
console.log(user["email"]);
console.log(user["full name"]);

console.log(user[mysystem]); //this is the only way to access symbol from object
console.log(typeof mysystem);



user.email = "vasukumar@gmail.com";  //we changed the email
console.log(user);

// Object.freeze(user);    // after using freeze or applying freeze on our object nothing will propogate  or modify
user.email = "vasuyadav@gmail.com";
console.log(user);




//adding functions

user.greeting = function(){
    console.log("Hello js user");
}
console.log(user.greeting()); 

user.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}
console.log(user.greetingTwo());



