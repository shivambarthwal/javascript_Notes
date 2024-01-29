
// let a = 250 // globe scope
// if (true){
//     let a = 10 
//     const b = 20

//    // var c = 30 // only var will print : exception why we don't use Var anymore
// // }

// //  //console.log(a);
// //  //console.log(b);
// //  console.log(a);


// //nested scope

// function one() {
//     const username ="shivam"
    
//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     two()
// }
// one()

// if function is hold in a variable we cannot call it before decalaration

console.log(addtwo(5));
const addtwo = function(num){
    return num + 2
}
