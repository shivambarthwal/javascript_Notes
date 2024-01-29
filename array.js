//  const myarr = [1,2,3,4,5]
// // console.log(myarr[2])

// //myarr.push(6)
// //console.log(myarr);

// // const heroes=["ironman", "thor","blackpanther"]
// // // heroes.push("captain america")
// // // heroes.pop()
// // heroes.unshift("hulk")
// // console.log(heroes);

// //console.log(myarr.includes(5));
// //console.log(myarr.indexOf(5));


// //join convert type to string

// console.log("A",myarr);
// const newarr = myarr.slice(1,2)

// console.log(newarr);
// console.log("B",myarr);

// const newarr2 = myarr.splice(1,2)
// console.log("C",myarr);
// console.log(newarr2);

const mcheros = ["thor", "Ironman","spiderman"]
const dcheros = ["flash", "batman","superman"]
//console.log(mcheros,dcheros);
//console.log(`Marvel heros are ${mcheros} they are good and some DC heros are ${dcheros}`)


//not a good method
//mcheros.push(dcheros)
//console.log(mcheros);

//concat method to merge string
//const allhero =  mcheros.concat(dcheros)
//console.log(allhero);

// Use of spreadspread 

// const allnewhero = [...mcheros,...dcheros]
// //console.log(allnewhero);

// const somearr=[1,2,3,[4,5,6],7,[8,9,[11,12]]]
// const realsomearr = somearr.flat(Infinity)
// console.log(realsomearr)


//console.log(Array.isArray("SHIVAM"));
console.log(Array.from("SHIVAM"));
console.log(Array.from({name:"SHIVAM"}));
///intresting for interview , need keys and value else return empty object

