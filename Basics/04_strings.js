const name = "vasu";
const marks = 90;

console.log(`Hello my name is ${name} and my marks in maths is ${marks}`); //string interpolation 

//declaring string as an object
const newName = new String("Vasu");
console.log(typeof newName);
console.log( newName[0]);
console.log(newName.length, newName.toUpperCase(), newName.charAt(3));

//substring
const newString = newName.substring(0,2);
console.log(newString);

//slice
const str = newName.slice(-4,3); // we can give negative indexing also which work in reverse order
console.log(str);

//split
const sentence = "I am good boy";
console.log(sentence.split(' '));

//trim
const str1 = "   vasu   ";
console.log(str1);
console.log(str1.trim());

//url
const url = "https://vasuproduction.org/vasu%20kumar";
console.log(url.replace('%20','-'));
console.log(url.includes('yadav'));

