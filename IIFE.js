//Immediately Invoked Function Expressions (IIFE)

(function Chai(){
    console.log(`DB CONNECTED`);
})();

((name) => {
    console.log(`DB CONNECTED SECOND ${name}`);
}
)("shiva") 
