// good evening everyone!

// variables
// let
// var
// const

// more strict, will cut down on potential errors
let name = "Jacob";
let name = "Sarah"; // errors

// deprecated version of creating variables
var name = "Jacob";
var name = "Sarah"; // works!

// constant
const PI = 3.14159;

// logic gating
// boolean - 2 states
// true of false

// a decision being made
if (true) {
  console.log("Hello!");
}

// comparison
if (5 === "5") {
  console.log("Hello!");
}

let year = 2008;

if (year > 2008) {
  console.log("You car is new");
}

let year = 1970;

if (year > 2008) {
  console.log("Your car is new.");
} else if (year > 2000) {
  console.log("Your car is average.");
} else {
  console.log("Your car is old.");
}

let year = 2008;

// ternary operator
if (year > 2000) {
  console.log("yes");
} else {
  console.log("no");
}

// shorter way :)
(year > 2000) ? console.log("yes") : console.log("no");

// looping
// while
// for
// do..while

while (false) {
  console.log("Hello");
}

// infinite loop
// step 1: make a counter
let counter = 0;

// step 3: comparison
while (counter < 3) {
  console.log("Hello");
  // step 2: increment
  counter++;
}

// step 3: comparison
while (true) {
  console.log("Hello");
  // step 2: increment
  counter++;

  if (counter >= 3) {
     break;
  }
}

// for loop
// for (init; condition; increment)
for (let counter = 0; counter < 3; counter++) {
  console.log("Hello");
}

// diff between a while loop and a do while loop?
// do while will perform the instructions at least once
do {
  let guess = window.prompt("Guess a number between 1 and 10.");
} while (guess != 7);


// while (if the number you guessed was 7, exit. else, ask again) {
//   console.log("Guess a number between 1 and 10.");
// }


let guess = 0;

do {
  guess = window.prompt("Guess a number between 1 and 10.");
} while (guess != 7);

// scope
// {} block
// {
//   {
//     {

//     }
//   }
// }

//
