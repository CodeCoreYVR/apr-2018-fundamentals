// javascript!
// day 1
// variables
// data types
// logic gating
// loops

// pick a number between 1 and 10, guessing game


window.alert();
window.confirm();
window.location.href;
prompt("Enter your guess: ");

let secretNumber = 8;
let guess = prompt("Enter your guess: ");

do {
  if (secretNumber == guess) {
    console.log("You guessed the secret number: 8.");
    break;
  } else {
    console.log("The secret number is not "+ guess);
    guess = prompt("Guess again: ");

  }
} while (true);


let secretNumber = Math.random();
let guess = -1;

do {
  guess = prompt("Enter your guess: ");
} while (secretNumber != guess);

console.log("You guessed the secret number: " + guess);


// version 2
let secretNumber = Math.ceil(Math.random() * 10);
let guess = -1;

do {
  guess = prompt("Enter your guess between 1 and 10: ");

} while (secretNumber != guess);

console.log("You guessed the secret number: " + guess);


// version 3
let secretNumber = Math.ceil(Math.random() * 10);
let guess = prompt("Enter your guess: ");

do {
  if (secretNumber == guess) {
    alert("You guessed the secret number: " + guess);
    break;
  } else {

    if (guess > secretNumber) {
      alert("The guess number is too high");
    } else {
      alert("The guess number is too low");
    }

    guess = prompt("Guess again: ");
  }
} while (true);

// day 2
// REpresentation State Trasfer <- white paper
<html>
<head></head>
<body>
  <form action="" method="POST">
    <input type="text">
    <input type="password">
    <input type="submit">
  </form>
</body>
</html>

// day 3
// data structures
// functions
// array list
// functions, declaritive function
// parameters, arguments
// make a function that takes in an array and returns the sum of it's elements
let sales = [12.32, 135.24, 590.30, 8921.10];

function totalSales(arr) {
  let total = 0;

  for (let elm of arr) {
    total += elm;
  }

  return total;
}

let total = totalSales( sales );
console.log("Our total sales for this quarter was: " + total);

// object - object oriented programming
// objects are basis for everything meaningful in programming.
let school = {
  name: "CodeCore",
  address: "128 W. Hastings St.".
  enrolments: 60,
  classes: ["Bootcamp", "Fundaments", "AWS Workshop"],
  students: [{name: "Brian"}, {name: "Orsolya"}],
  teachers: [{name: "Jacob"}, {name: "Jason"}],
}
// how many enrolments do we have?
school.enrolments; // 60
// what is the name of our second teacher?
school.teachers[1].name; // "Jason"

// JavaScript Object Notation

// day 4
// CSS
<h1 style=""> // inline styling

<style>
  h1 {
    color: black;
    backgroundColor: red !important;
  }
  .highlight {
    backgroundColor: yellow;
  }
</style>

<link rel="stylesheet" href="style.css">

<h1 class="highlight"></h1>
<h1 class="highlight"></h1>
<h1 class="highlight"></h1>
<h1 class="highlight"></h1>

// color
// "green"
// rgb(0, 255, 0;
// #00FF00;

// day 5
// methods - a function that belongs to an object or class
let school = {
  name: "CodeCore",
  enrolment: 60,
  // broadcast: function() {}
  broadcast() { console.log("broadcast this class!") }
};

school.name;
school.enrolment;
school.broadcast();

// function(){} //<- anonymous function
// // declaritive function
// // expressive function
// let broadcast = function(){};

// classes
class Cookie {
  constructor(sugar, flour) {
    this.sugar = sugar;
    this.flour = flour;
  }
  bake() {
    console.log(`I am baking a cookie with ${this.sugar}g of sugar and ${this.flour}g of flour!`);
  }
  eat() {}
}
// constructing an instance of a class
const oreo = new Cookie(10, 20);
const oatmeal = new Cookie(20, 30);
const shortbread = new Cookie(30, 40);

oatmeal.bake();

// higher order functions - function that takes in a function as an argument
function greet() {
  console.log("Hi!");
}

function greet2( name ) {
  console.log("Hi " + name);
}

function runThree( fn ) {
  fn();
  fn();
  fn();
}

// asychronous JavaScript
// built-in higher order function
// timing functions
function greet() {
  console.log("Hi!");
}
setTimeout(greet, 3000);
setInterval(greet, 2000);


setInterval(function(){
  console.log("Hi!");
}, 2000);

// say hi 3 times
let counter = 0;

let id = setInterval(function(){
  console.log("Hi!");
  counter++;

  if (counter >= 3) {
    clearInterval(id);
  }
}, 2000);

// mapping....
let numbers = [1,2,3,4,5];
// higher order function
function square(number) {
  return number * number;
}
square(5); // 25

function map(arr, fn) {
  let results = [];

  for (let elm of arr) {
    results.push(fn(elm));
  }

  return results;
}

// result
map(numbers, square); //[1,4,9,16,25]


// filtering...
let numbers = [1,2,3,4,5];

function isOdd(number) {
  if (number % 2 != 0) {
    return true;
  } else {
    return false;
  }
}

function isOdd(number) {
  return (number % 2 != 0);
}

isOdd(7);
isOdd(8);
// higher order function

function filter(arr, fn) {
  let results = [];

  for (let elm of arr) {
    if (fn(elm)) {
      results.push(elm);
    }
  }
  
  return results;
}

filter(numbers, isOdd); // [1,3,5]

// lodash.js, underscore.js
//
