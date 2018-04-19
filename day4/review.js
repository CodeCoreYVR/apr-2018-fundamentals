// good evening everyone!

// review

// day 1
// intro to JavaScript
// "JavaScript" <- Netscape? Brendan Eich? Oracle!!!!
// ECMAScript <- European Computer Manufacturers Association
// 10 days
// v 6.0
let name = "Jacob"; // string
let age = 39; // number, integer
let height = 1.65; // float, long, decimal, double

const PI = 3.141;

// logic gating
if (age > 18) {
  console.log("adult");
}

if (age > 18) {
  console.log("adult");
} else {
  console.log("youth");
}

if (age > 18) {
  console.log("adult");
} else if (age > 10) {
  console.log("teen");
} else {
  console.log("youth");
}

// switch..case
// ternary ? :

// loops
console.log(0);
console.log(1);
console.log(2);
console.log(3);

// for () {}

// infinite
while(true) {
  console.log("Hello");
}

while(true) {
  console.log("Hello");
  break;
}

while(age > 18) {
  console.log("Hello");
  break;
}

let counter = 0;

while(counter<=10) {
  console.log("Hello");
  counter++;

  // counter = counter + 3;
  // counter += 3;
}

let counter = 0;

while(counter<10) {
  console.log(counter + ": Hello");
  counter++;
}

// do..while() {};
// for ( in ) {}
// for ( of ) {}

// day 2
// html - Hypertext Markup Language
// Sir Tim Berners-Lee
// CERN Labs
// elements, tags, attributes, values
<html>
  <head>
    <meta name="description" content="This description appears in google.">
    <title>My First Page</title>
  </head>
  <body>
    <h1>Chapter 1</h1>
    <p>It was the best of times, it was the worst of times</p>

    <form action="success.html">
      <input type="text">
      <input type="password">
      <input type="email">
      <input type="radio">
      <input type="checkbox">
      <input type="submit">
    </form>
  </body>
</html>

// day 3
// JavaScript
// functions
// declaritive function
function add(number1, number2) {
  console.log(number1 + number2);
}

add(5, 6);

function add(number1, number2) {
  return (number1 + number2);
}

add(10, 2);


function add(number1, number2) {
  return (number1 + number2);
}

add(10, 2) * 12;
console.log( add(10, 2) );


add( add(4,6) , add(1,1) );

// association a block of logic to a name
morning();
morning();
morning();
morning();
morning();

// arrays - list
let shoppingList = ["bread", "butter", "milk"];
shoppingList.push("cheese");
// push is a method <- a function associated with an object or class
// push is a function
shoppingList.shift();

// more methods - look up the MDN!
// multi-dimensional arrays
let tictactoe = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
];

// x in the middle of the game boards
tictactoe[1][1] = "X";

// objects - another type of list...
// properties!!!
// let shoppingList = ["bread", "butter", "milk"];
const shoppingList = {
  0: "bread",
  1: "butter",
  2: "milk"
};

const me = {
  name: "Jacob",
  age: 39,
  hobby: "rock climbing"
}

const me = {
  name: "Jacob",
  age: 39,
  hobby: ["rock climbing", "bjj", "coding"],
  baby: {
    name: "Sienna",
    age: 6
  }
}

me.age; // dot operator
me.age = 25;

shoppingList[0]; // "bread"
me["age"]; // 25
me["age"] = 18;

me.baby.age;
me["baby"].age;
me["baby"]["age"];

const kid = me.baby;
kid.age;

// what is my last hobby?
me.hobby[2];

// JSON - JavaScript Object Notation

// hash - object
// key - property
// value - value
"Hello World";

{
  "Hello": 5,
  "World": 5
}

let lyric = "All you need is love"; // string "", '', ``
["A", "l", "l" ... ]

lyric[0]; // "A"
lyric[ lyric.length-1 ]; // "e"

let words = lyric.split(" "); // string method, or function, returns an array

// function split() {
//   return [ word ];
// }

const me = {
  name: "Jacob",
  age: 39
}

me.hairColour;

const me = {
  name: "Jacob",
  age: 39,
  glasses: false
}

me.hairColour = "black";
me["eyeColour"] = "brown";

let newProperty = "profession";
me[ newProperty ] = "Teacher";



let lyric = "All you need is love";
let words = lyric.split(" ");
const result = {};

for (let word of words) {
  result[word] = word.length;
}

// {
//   "All": 3,
//   "you": 3,
//   "need": 4,
//   "is": 2,
//   "love": 4
// }






// day 4
