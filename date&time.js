// // ///DAtes

// // // let myDate = new Date()
// // // console.log(myDate.toString());
// // // console.log(myDate.toDateString());
// // // console.log(typeof myDate);

// // // let mycreatedDate = new Date(2000, 8,1)
// // // console.log(mycreatedDate.toDateString());

// // let quizDate = new Date("02-21-2023")
// // console.log(quizDate.toDateString());
// // let timestamp = Date.now()
// // console.log(Math.floor(Date.now()/1000));



let newdate = new Date()
// console.log(newdate);
// console.log(newdate.getMonth()+1);

// console.log(`${newdate.getDate()}and the month is ${newdate.getMonth()+1} the year is ${newdate.getFullYear()}`)
newdate.toLocaleString('default',{
    weekday:"long",
    timeZone:"IST"
})