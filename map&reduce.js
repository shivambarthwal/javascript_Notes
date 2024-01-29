// // const myNumber = [1,2,3,4,5,6,7,8,9,10]

// // //const newNum =  myNumber.map( (num)=> num+10 )

// // const newNum = myNumber
// // .map((num)=> num *10)
// // .map((num)=> num + 1)
// // .filter((num)=> num>= 40)
// // console.log(newNum);


// ///////////////////REDUCE FUNCTION////////////


// const Mynums = [1,2,3]

// // const mytotal = Mynums.reduce( function(acc,curvalue){
// //     console.log(`acc${acc} andcurrentvalue ${curvalue}`);
// //     return acc + curvalue
// // },0)

// const mytotal = Mynums.reduce((acc,curr)=> acc+curr,1)

// console.log(mytotal);


const shoppingCart = [
    {
        itemName : "js course",
        price : 2999,
        techer : "shivam"
    },
    {
        itemName : "Gaming course",
        price : 9999,
        techer : "Rahul"
    },
    {
        itemName : "fullstack course",
        price : 8999,
        techer : "Tilak"
    },
    {
        itemName : "java course",
        price : 4999,
        techer : "harsh"
    }
]

const total = shoppingCart.reduce((acc, item) => acc + item.price,0)
console.log(total);