// Date -> object

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());


let date = new Date(2022,0,23);
console.log(date.toDateString());

let date1 = new Date(2022,0,23,5,2);
console.log(date1.toLocaleString());

let date2 = new Date("2020-8-23");
console.log(date2.toLocaleString());


//timestamps
let timestamp = Date.now();
console.log(timestamp);

console.log(date2.getTime());

//convert in seconds
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getMonth(), newDate.getDate(), newDate.getDay());


newDate.toLocaleString('default',{
    weekday: "long",
});
console.log(newDate);


