// good morning everyone!

// review
// day 1
let name = "Jacob";
let age = 39;

if (age > 18) {
  console.log("adult");
}

if (age > 18) {
  console.log("adult");
} else {
  console.log("child");
}

let counter = 0;

while (counter < 10) {
  console.log(counter);
  counter++;
}

// day 2
<html></html>
<form>
  <input type="">
</form>

// day 3
// functionality
function greet( name ) {
  console.log(`Hello ${ name }`);
}

// scope - lexical scope
// gives us nothing
console.log(name);

greet( "Jacob" );

// lexical scope - can we access a variable?
{
  let a = 10;
  {
    console.log(a);
  }
}

// return
// declaritive function, function declartion
function add( number1, number2 ) {
  return number1 + number2;
}

add( 5, 6 ) === 11;
// functions are values

// data structures
// arrays
// objects
const shoppingList = {
  0: "milk"
};
shoppingList[0];

let shoppingList = ["milk"];
shoppingList[0];
// functions, behaviours
// add things to the start of our list
// remove things from the end of our list
shoppingList.push();
shoppingList.pop();

// day 4
// CSS, SASS - Stylistically Awesome StyleSheets
// https://sass-lang.com/
<h1 style="color:pink">
<style>
  //  css rule
  h1 {
    // property: value
    font-size: 10px;
    font-family: serif;
    color: rgb(0, 255, 0);
    text-decoration: none;
    background-color: #CCCCCC;
  }
</style>
<link rel="stylesheet" href="style.css">

// day 5....
// function expressions
// objects with methods
// classes
// higher order functions

//
