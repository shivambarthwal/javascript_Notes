// // //If Statement

// // //Operator
// // // < , > ,<= ,>= ,==,!=,===(strict checking ,also check the typeof ),!==

// // const UserLoggedin = true

// // const temprature = 41
// // if (temprature < 50) {
// //     console.log("Yes, Its less than 50");
// // }else{
// // console.log("Temprature is high today");
// // }

// // const score = 200

// // if (score>100) {
// //     const power ="fly"
// //     console.log(`user power:${power}`);
// // }

// //const balance = 1000
// //if (balance > 500) console.log("sufficiet"),console.log("enjoy the money");
// //NOt a good practice to write  a code like this 

// // if (balance < 500) {
// //     console.log("Less then ");
// // } else if(balance<750){
// //     console.log("Less than 750");
// // }else if(balance<900){
// //     console.log("Less than 900");
// // }
// // else{
// //     console.log("Less than 1200");
// // }

// const UserLoggedin = true
// const debitCard = true
// const loggedInfromgoogle  = false
// const loggedInEmail = true

// if(UserLoggedin && debitCard){
//     console.log("Allow to buy any course");
// }
// if (loggedInfromgoogle || loggedInEmail) {
//     console.log("Ready For Shopping");
// }




////////////////////----------------SWITCH CASE--------------------//////////////




// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3
switch (month) {
    case 1:
        console.log("JAN");
        break;
    case 2:
        console.log("FEB");
        break;
        case 3:
            console.log("MARCH");
            break;
        case 4:
            console.log("APRIL");
            break;    
default:
    console.log("default matched");
        break;
}