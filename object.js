// //singleton:- use of constructor
// //object.create  

 //object literals

// const mySYM = Symbol("user1")

// const jsuser ={
//     name:"Shivam",
//     age: 23,
//     [mySYM]:"user1",  //Symbol should declare in []
//     location:"jaipur",
//     email:"shivam.google.com",
//     isLogin: false,
//     lastLogin:["Mon","Wed","Sat"]

// }
// //console.log(jsuser);
// //console.log(jsuser.location);

// //overwrite the value

// //jsuser.email = "shivambarthwal@chatgpt.com"

// //console.log(jsuser.email);
// //console.log(jsuser[mySYM])

// //Object.freeze(jsuser)
// jsuser.email = "shivam.fb.com"
// //console.log(jsuser);



// //FUNCTION

// jsuser.greeting = function(){
//     console.log("Hello JS user");
// }

// jsuser.greetingTwo = function(){
//     console.log(`Hello JS user,${this.name}`);
// }
// console.log(jsuser.greetingTwo());
// console.log(jsuser.greeting());


//as a const



//singleton

//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "R33165"
tinderUser.name = "Harsh"
tinderUser.Islogin = false
//console.log(tinderUser);

const regularuser = {
    email : "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"shivam",
            lastname:"barthwal"
        }
    }
}
//console.log(regularuser.fullname.userfullname.lastname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"s", 4:"h"}
const obj4 = {5:"h",6:"j"}
//console.log(obj1,obj2);
// //const obj3 = Object.assign({} ,obj1,obj2,obj4)
// const obj3 = {...obj1,...obj2,}
// //console.log(obj3)

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));


const course ={
    coursename :"JS Tutorial",
    price : "999",
    courseInstructor : "shivam"
}

const{ courseInstructor : teacher} = course

console.log(teacher);


// {
//     "name":"harsh",
//     "course": "c sharp",
//     "pric"e : "free"

// }

