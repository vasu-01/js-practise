//#reduce



// syntax and explanation

// const initialValue = 0;
// const sumWithInitial = array.reduce(
//     (accumulator, currentValue) => accumulator + currentValue, initialValue
// );
// console.log(sumWithInitial);

//-> Step1: Declared initialValue
//-> Step2: Now the value of initialValue for first time go/store in accumulator 
//-> Step3: After that accumulator takes the calculated result like accumulator + currentValue
//it's like adding n numbers

const myNums = [1,2,3,4,5,6];
const myTotal = myNums.reduce(function(acc,currVal){
    console.log(`accumulator: ${acc} and currVal: ${currVal}`);  //to check how values the assigning each time
    return acc + currVal;
},0);
console.log(myTotal);

//using arrow loop
const myTot = myNums.reduce((acc,currVal)=> acc + currVal,0);
console.log(myTot);


//example for object

const shoppingCart = [
    {
        itemName: "js course",
        price: 299
    },
    {
        itemName: "java course",
        price: 499
    },
    {
        itemName: "c++ course",
        price: 699
    },
    {
        itemName: "python course",
        price: 899
    },
];
const priceToPay = shoppingCart.reduce((acc,item)=> acc + item.price,0);
console.log(priceToPay);

