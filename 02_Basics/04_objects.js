// const instaUser = new Object();  //singleton object 

const instaUser = {}; //non-singleton object

instaUser.id = "159"
instaUser.name = "Vasu"
instaUser.isLoggedIn = false
console.log(instaUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Vasu",
            lastname: "Kumar"
        }
    }
}
console.log(regularUser.fullname.userfullname.lastname);


//combining objects

const obj1 = {1: "a",2: "b"};
const obj2 = {3: "a",4: "b"};

const obj3 = Object.assign(obj1,obj2);
console.log(obj3);
//or
const obj4 = Object.assign({},obj1,obj2); //it's a good because becoz here {} act as target and all other will act as source
console.log(obj4);
//or
const obj5 = {...obj1,...obj2};   //simplest and widely used way 
console.log(obj5);

//or when data is coming from db then we use like this

const users = [
    {
        id : 1,
        email : "vasu@gmail.com"
    },
     {
        id : 2,
        email : "nakul@gmail.com"
    },
     {
        id : 3,
        email : "sourabh@gmail.com"
    },

];

users[1].email
console.log(instaUser);
console.log(Object.keys(instaUser));        //all the keys present in instaUser object will be returned in array 
console.log(Object.values(instaUser));      //similarly all the values present in instaUser object will be returned in array 
console.log(Object.entries(instaUser));     //here all the key and values pairs are returned as individual array in a single array



//Destructuring

const course = {
    courseName: "js tutorial",
    price: "999",
    courseInstructor: "vasu"
}

//instead of writing course.courseInstructor and accessing values like this we can access like this
const {courseInstructor,price} = course;
console.log(courseInstructor,price);

//or you can give another name also to original key
const {courseName: name} = course;
console.log(name);


