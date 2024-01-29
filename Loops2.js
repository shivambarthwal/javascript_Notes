// // ///For Of
// // //(Array specific) Loops not idle for Object

// // //EX:1   const arr = [1,2,3,4,5]

// // // for (const num of arr) {
// // //     console.log(num);
// // // }

// // //EX:2

// // // const arr = [ "shivam","Harsh","Tilak","Bhanu"]

// // // for (const names of arr) {
// // //     console.log(`MY name is :${names}`);
// // // }

// // //MAPS :- Hold Key values pair and remember the original insertion order of the keys .Know for Unique VAlues No repetation

// // //const country = new Map()

// // // country.set('IN', "India")
// // // country.set('USA', "United State of America")
// // // country.set('Fr', "France")
// // // country.set('IN',"India")//will not print not a unique value

// // // //console.log(map);

// // // for (const [a,b] of country) {
// // //     console.log(a,':-',b);
// // // }

// // // const gameNames = {
// // //     'game1':'NFS',
// // //     'game2':'GTA',
// // //     'game3':'Spiderman'
// // // }
// // // for (const [a,b] of gameNames) {
// // //     console.log(a,":-",b);
// // // }

// // //For IN Loop suitable for object
// // // const language = {
// // //     js:'javascript',
// // //     cpp:"C++",
// // //     rb:"Ruby",
// // //     swift:"swift by apple"
// // // }
// // // for (const key in language) {
// // //     console.log(`${key} shortcut is for ${language[key]}`);
// // // }

// // // const programming =["js","cpp","java","ruby"]

// // // for (const key in programming) {
// // //     console.log(programming[key]);
// // // }

// // ///////////////FOR EACH ////


// // const coding = ["js","ruby","java","python","cpp"]

// // // coding.forEach( function(val) {
// // //     console.log(val);
// // // })

// // // coding.forEach( (item) => {
// // //     console.log(item);
// // // })


// // // function printme(item){
// // //     console.log(item);
// // // }

// // // coding.forEach(printme)


// // // coding.forEach((item,index,arr)=>{
// // // console.log(item,index,arr);
// // // })


// // const mycoding =[
// //     {
// //         languagename:"javascript",
// //         languageFile :"js"
// //     },
// //     {
// //         languagename:"java",
// //         languageFile :"javac"
// //     },
// //     {
// //       languagename:"phython",
// //         languageFile :"py"
// //     }
// // ]
// // mycoding.forEach((shiv)=>{
// //     console.log(shiv.languageFile);
// // })


// // const coding = ["js","ruby","java","python","cpp"]

// // const value = coding.forEach((item) => {
// //     console.log(item);
// //     return item
// // })
// // console.log(value);


// const mynums =[1,2,3,4,5,6,7,8,9,10]

// // const newnums = mynums.filter( (num) => num > 4 )
// // console.log(newnums);


// //const newnums = mynums.filter( (num) => {
//   //  return num > 4 })//return should be used with {}
// //console.log(newnums);

// const newnums = []
// mynums.forEach((num)=>{
//     if(num>4){
//         newnums.push(num)
//     }
// })
// console.log(newnums);





// Define an array of books
const books = [
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      year: 1951,
      genre: "Fiction"
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      genre: "Fiction"
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949,
      genre: "Dystopian"
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      genre: "Fiction"
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      year: 1997,
      genre: "Fantasy"
    }
  ];
  
 // const userBooks = books.filter( (bk)=> bk.genre==="Fiction")
 const userBooks = books.filter((mybk)=> {return mybk.year >=1955 && mybk.genre == "Fiction"})
  console.log(userBooks);
  