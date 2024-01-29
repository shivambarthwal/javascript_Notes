function myname(){
    console.log("S");
console.log("H");
console.log("I");
console.log("V");

}

//myname()

// function addNumber(num1,num2){
//         console.log(num1+num2);
// }

function addNumber(num1,num2){
    let result = num1+num2
    return result //nothing print after the return
}
const result = addNumber(5,6)
//console.log("My result :",result);

function loginusermessage(username){
    if(username === undefined){
        console.log("pls enter the name");
        return
    }
    return `${username} log in`
}

//console.log(loginusermessage("shiv"));


//rest operator (...) in function

function calculateCartprice(...num1) {
    return num1
}
//console.log(calculateCartprice(211,454,121,478,652));

const user = {
    username : "harsh",
    price : 247
}

function handleobject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);    
}

//handleobject(user)
handleobject({
    username : "pappu",
    price : 499
})

const myarr = [200,400,656,124]

function returnsecond(getarr){
    return getarr[2]
}

console.log(returnsecond(myarr));