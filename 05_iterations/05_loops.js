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


const books = [
    {title: 'Book One',genre: 'Fiction', publish: 1981,edition: 2006},
    {title: 'Book two',genre: 'Non-Fiction', publish: 2000,edition: 2008},
    {title: 'Book three',genre: 'History', publish: 2009,edition: 1999},
    {title: 'Book four',genre: 'Science', publish: 1988,edition: 2000},
    {title: 'Book five',genre: 'Physics', publish: 2005,edition: 2009},
];

//to find whose genre == history
let userBooks = books.filter( (bk) => bk.genre === 'History');
console.log(userBooks);

//to check more then one condition
userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === 'History';
});
console.log(userBooks);
