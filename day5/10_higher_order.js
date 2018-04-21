// a higher order function is a function that takes in a function as an argument

function greet() {
  console.log( "Hello!");
}

greet();
greet();
greet();

function greetThreeTimes() {
  greet();
  greet();
  greet();
}

greetThreeTimes();

function runThreeTimes( fn ) {
  fn();
  fn();
  fn();
}

// pass by reference
runThreeTimes( greet );


function greet() {
  console.log("Hello!");
}

function bye() {
  console.log("Ciao!");
}

function runThreeTimes( fn ) {
  fn();
  fn();
  fn();
}

runThreeTimes( greet );
runThreeTimes( bye );









//
