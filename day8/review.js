// good evening everyone!

// back-end:
// javascript basics
let name = "jacob";
let age = 39;

if (age > 18) {
  console.log("adult!");
}

let counter = 0;
while (counter < age) {
  console.log(counter);
  counter++;
}

// advanced javascript
// data structures: arrays, objects
let numbers = [1,7,13,22,38,42];
numbers[0]; // 1
numbers[5]; // 42

const numbers = {
  0: 1,
  1: 7,
  2: 13....
};

const me = {
  name: "Jacob",
  age: 39
};

me.name;
me.age;

// functions
function morning() {
  console.log("wake up");
  console.log("eat breakfast");
  console.log("take transit");
}

morning();

function add(number1, number2) {
  return number1 + number2;
}

add(5, 6) == 11; // true

// statements vs expressions

// classes
class House {
  constructor(colour) {
    this.colour = colour;
  }
}

const home = new House("white");
home.colour; // "white"
const condo = new House("red");
const trailer = new House("yellow");

// higher-order functions - a function that takes a function as an argument
function call( fn ) {
  fn();
}

call( add );

setTimeout(function() {
  console.log("steak!");
}, 4000);

// expressive function
// let add = function() {};

// front-end:
// html
<html></html>
// css
<h1 style="">
<style></style>
<link rel="stylesheet" href="style.css">

<style>
  h1 {
    color: pink;
    font-family: san-serif;
  }
</style>
// advanced css
div {
  display: block;
}
span {
  display: inline;
}


// layouts
div {
  float: left;
}

img {
  float: left; // wrapping
}

#mario {
  // set mario to a specific spot on the screen
  position: absolute;
  // TRBL - top right bottom left
  top: 100px;
  left: 100px;
}

<div id="mario">

.navbar {
  // set mario to a specific spot on the screen
  position: fixed;
  // TRBL - top right bottom left
  top: 0px;
  left: 0px;
  width: 100%;
  height: 50px;
}

<div class="navbar">

// DOM - document object model
// jquery - john resig 2006
$('h1'); // wrapped set
$('h1').eq(0);
$('h1').eq(0).html("Jacob was here!");
// cheat sheet
// overapi

// get the text value of a form element
<html>
  <head>
    // 1. include jquery
    <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
    // <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script>
      $(document).ready(function(){
        // 2. make sure the page is ready

        $('form').submit(function() {
          let username = $("#username").val(); // getter
        });

        // $("#username").val("hello!"); // setter
        // $("input").eq(0);
        // $("input[type=text]");
      });
    </script>
  </head>
  <body>
    <form>
      <input id="username" type="text">
      <input type="submit">
    </form>
  </body>
</html>






//
