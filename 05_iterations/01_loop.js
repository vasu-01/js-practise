//for


for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
}

//loop inside loop
for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(i + " * " + j + ' = ' + i*j );
    }
    
}

//accesing array
let array = ["Vasu", "Nishant", "Vishal"];
console.log(array.length);

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
}


//break and continue

for (let i = 0; i <= 20; i++) {
    if(i == 5){
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${i}`);
}

for (let i = 0; i <= 20; i++) {
    if(i == 5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${i}`);
}