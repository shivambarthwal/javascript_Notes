const profile =  String ("shivamharsh")
const salary = "12500"

// console.log(profile+salary+"full stack developer");

//template - literals ( Modern way to worki in javascript )

// console.log(`my name is ${profile.toUpperCase()} , lenght of name is ${profile.length} and i am working as ${"webdevloper"} in google and salary is ${salary}`);

// console.log(profile[1]);

// console.log(profile.toUpperCase());
// console.log(profile.charAt(2));
// console.log(profile.indexOf('v'));
// const newprofile= profile.substring(0,6)
// console.log(newprofile);

// const anotherprofile = "     shivam   barthwal    "
// console.log(anotherprofile);
// console.log(anotherprofile.trim());

// const url = "https://www.shivambarthwal%20webdev%20"
// // console.log(url.replaceAll('%20','me'));
// console.log(url.includes('shivam'));
// console.log(url.split('%'));

// const a = 5;
// const b = 10;
// console.log(`Fifteen is ${a + b} and
// not ${2 * a + b}.`);

// const globalObject = this;
// const foo = () => this;
// console.log(foo() === globalObject);

const payment = new Number(450)
console.log(payment);
console.log(payment.toFixed(1));