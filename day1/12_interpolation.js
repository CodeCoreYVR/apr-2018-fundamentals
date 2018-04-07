// string interpolation
// injection
let age = 39;

`Jacob is 39 years old`;
// string interpolation
`Jacob is ${ age } years old.`;
`In a dozen there are ${ 6 + 6 } eggs.`;

// depreciated, or not clear, ambiguous
"Jacob is " + age + " years old.";
"In a dozen there are " + (6+6) + " eggs.";

"ABCDEFG".length; // length property
// programmers like to start counting from zero instead of 1
"ABCDEFG"[0]; // "A"
"ABCDEFG"[1]; // "B"
"ABCDEFG"[6]; // "G"

let result =  5 - 4;
"ABCDEFG"[ result ]; // "B"

"ABCDEFG"[ 5 - 4 ]; // "B"

// string mutation using sub will fail silently
let name = "Jacob";
name[0] = "Y"; // will fail silently
console.log( name );
