                                    // data types

/*

Eg: let s = 1/0;
    console.log(s);
    o/p : infinity.


Data Type : Number (float, int, double, long, infinity, -infinity, NAN(Not a number) are called as number in javascript)

*/

//NUMBER type

let s  = "12"*12  // in arithmetic operation js will try to convert string into number in this case "12" can be converted into 12 so arithmetic operation is done
console.log(s);

// but in this case
let b = "12a"*12 // here "12a" is not possible to converted into number so NaN is returned
console.log(b);

//addition of string and number results always in string type

//  bigint when data is greater than 2^53

let x = 10n; // here n specifies x is bigint
console.log(typeof x); // o/p:bigint 

// String type
//these are are strings
let str = "anirudh"
let str1 = 'anirudh'
let char = 'a'

let num1 = 10;
let num2 = 20;
console.log("addition of "+num1+" and "+num2+" is "+(num1+num2));


