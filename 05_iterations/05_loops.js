//forEach loop :-higher order function

const coding = ['js','ruby','java','swift'];

coding.forEach(function (val) {
    console.log(val);
});
//or using array function
coding.forEach(element => {
    console.log(element);
});
//Note:- in for each loop element, index as well as whole array list comes in the variable like val or element.
const arr = [1,2,3,4,5];
coding.forEach((element,index,arr) => {
    console.log("element: ",element, "  index: ", index, "  arrayIndex: ",arr);
});



//iterating object using forEach loop
const myCoding = [
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'java',
        languageFileName: 'java'
    },
    {
        languageName: 'python',
        languageFileName: 'py'
    },
];

myCoding.forEach((item) =>{
    console.log(item.languageName);
});
