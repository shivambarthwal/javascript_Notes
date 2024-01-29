// //This = It is used un current context inside a particular {}



// // const user = {
// //     username : "shivam",
// //     price : 788,

// //     welcomeMessage : function(){
// //         console.log(`${this.username}, Welcome to our Course`);

// //     }
// // }
// // user.welcomeMessage()
// // console.log(this)


// //this will work only inside a obj not a function

// const chai = function () {
//     let username = "pappu"
//     console.log(this.username);
// }

// const chai = () => {
//     let username = "shivam"
//     console.log(this);
// }
// chai()

//arrow function

() => {}

// const addme = (num , num2) =>{
//     return num + num2
// }
// console.log(addme(5,4))
// //When curley braces is used {} return keyword is required  


// const addme = (num , num2) => num + num2
// console.log(addme(5,2))

//object return {} is req.
const addtwo = (num1,num2) => ({username: "shiv"})
console.log(addtwo());