// data
// values

// types of data
// types of values

// strings - text
// booleans - true or false
// numbers - 0 ... infinity
Infinity;
5 + 6;
3.14159;

Infinity;
Infinity + Infinity;
Infinity - Infinity;
// NaN = Not a Number

// Math Library
// tool set
// +, -, /, *

10 ** 2; // exponent, power

9 % 3; // 0
10 % 3; // 1
11 % 3; // 2
12 % 3; // 0
// modulus, modulo
// remainder

Math.PI;
Math.round( 3.14 );
Math.ceil( 3.14 );
Math.floor( 3.9 );
Math.abs( -3.14 );
// console.log

// returns you a random float between zero and one
// float = floating point number
// decimal number
Math.random();

// choose a number between 1 and 10
// 1. create a random number
Math.random();
// 2. multiply that fraction by our upper range
Math.random() * 10;
// 3. add to that number our lower range
1 + Math.random() * 10;
// 4. subtract our upper range from our lower range
1 + Math.random() * (10-1);
// 4. round the result
Math.round( 1 + Math.random() * (10-1) );

// using variables
let random = Math.random();
random * 10;
let upperRange = 10;
random * upperRange;
1 + random * upperRange - 1;
let lowerRange = 1;
let number = lowerRange + random * (upperRange - lowerRange);
Math.round(number);


// random number between 1 and 10 
let number = Math.random() * 10;
console.log( Math.ceil( number ) );







//
