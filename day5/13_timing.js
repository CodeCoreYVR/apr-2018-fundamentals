// timing functions
// built in higher order functions
// a function that takes in a function as an argument

// setTimeout(fn, delay);
function greet() {
  console.log("Hello!");
}
// delay is in milliseconds, 1 sec = 1000 ms
setTimeout(greet, 3000);

// event loop
// video...

setTimeout(function() {
  console.log("Hello!");
}, 3000);

// setInterval
let id = setInterval(function() {
  console.log("Hello!");
  clearInterval(id);
}, 3000);

// say hello 3 times before stopping
let counter = 0;
let id = setInterval(function() {
  console.log("Hello!");
  counter++;

  if (counter >= 3) {
    clearInterval(id);
  }
}, 3000);






//
