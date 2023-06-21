const sum = (x,y) => x+y;
const sub  = (x,y) => x-y;
const multiply = (x,y) => x*y;
const divide = (x,y) => x/y;

const calc = (x,y,func) => func(x,y);

let x=10,y = 20;
console.log(calc(x,y,sum));
console.log(calc(x,y,sub));
console.log(calc(x,y,multiply));
console.log(calc(x,y,divide));
