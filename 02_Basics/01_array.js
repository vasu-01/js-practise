const array = new Array(1,2,3,4,5);
console.log(array[3]);

//Array Methods

//Push & Pop
array.push(6);             //adds the element at the end 
console.log(array);

array.pop();              //remove element from the end
console.log(array);

//Shift & Unshift
array.unshift(8);         //add element at start of the array
console.log(array)

array.shift();            //remove element from start of the array
console.log(array);

//includes & indexOf
console.log(array.includes(3));  //if element present it'll return true otherwise false

console.log(array.indexOf(9));   //return index of the element if present in array otherwise -1


//join
const newArr = array.join(); //adds all the elements of array into string

console.log(newArr);
console.log(typeof newArr);

//slice & splice
console.log("A ",array);

const arr = array.slice(1,3);
console.log(arr);

console.log("B ",array);

const arr2 = array.splice(1,3);
console.log(arr2);


console.log("C ",array);

//Note:- When we talk about splice and slice so the basic difference is in slice 2nd one is excluded while in splice 1st one is included but the main difference is splice manipulates the original array 


