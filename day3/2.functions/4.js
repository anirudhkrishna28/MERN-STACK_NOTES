const calculator = (a,b,sum) => sum(a,b);
const add = (x,y) => x+y;

let c = calculator(10,20,(x,y) => x+y); // passing the arrow function itself
let d = calculator(100,200,add);        // passing the name of the arrow function

console.log(c);
console.log(d);


