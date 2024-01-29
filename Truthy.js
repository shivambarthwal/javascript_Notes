const userEmail = []

if (userEmail) {
    console.log("WELCOME");
}
else{
    console.log("dont have email");
}

//NOTES--------------
//falsy value = 0,-0,BIgINT,"",null,undefined,NaN
//truthy value = "0"(zero inside a string),'false'," ",[],{},function(){}

// if (userEmail.length==0) {
//     console.log("Array is empty ");
// }

// const emptyObj ={}
// if (Object.keys(emptyObj).length===0) {
//    console.log("Object is empty"); 
// }


//NUllish Coalesing operator(??): null undefined

// let val1;
// //val1 = 5 ?? 10
// val1 = null ?? 10


// console.log(val1);

// Terniary Operator
// condition ? true:false

const iceTeaPrice = 100

iceTeaPrice<= 80? console.log("less than 80") : console.log("more than 80");
