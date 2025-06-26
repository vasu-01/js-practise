const heros = ["thor","iron man","spiderman"];
const dc = ["superman","flash","batman"];

heros.push(dc);    //it takes complete array as data not as an individual element like this ["thor","iron man","spiderman",["superman","flash","batman"]] and work on existing array
console.log(heros);

const allHero = heros.concat(dc);  //works on new array and combined two or more array without modifying existing array like ["thor","iron man","spiderman","superman","flash","batman"]
console.log(allHero);

//or you can use spread operator

const allnewHeros = [...heros,...dc];
console.log(allnewHeros);


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_Array = another_array.flat(Infinity);
console.log(real_another_Array);



console.log(Array.isArray("Vasu"));   //return false because Vasu is not an array but we can convert into array
console.log(Array.from("Vasu"));      //this will convert Vasu in array of characters


