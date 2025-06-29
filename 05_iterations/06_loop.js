const myNums = [1,2,3,4,5,6];

const newNums = myNums.map((num)=> num + 10);
// console.log(newNums);



//#chaining in map but here is the concept the array executed in first map and the values after execution will go in second map as it is  

const newNum = myNums
.map((num)=> num * 10)
.map((num)=> num + 1)
.filter((num)=> num >= 40);
console.log(newNum);
