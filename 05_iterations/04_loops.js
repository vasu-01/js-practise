const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'Ruby'
}

//for in loop used for objects
for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

//let try it on array
const programming = ["js","cpp","ruby"];
for(const key in programming){
    console.log(key);
    console.log(programming[key]);
}