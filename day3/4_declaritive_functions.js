// function summary

// define a function
function subtract() {}

// call a function
subtract();



// strange behaviour
multiply(3, 7); // will this work?

// declartive functions are compiled during the pass of interpretation
// they are placed into the global name space
function multiply( number1, number2 ) {
  return number1 * number2;
}

// javascript gets interpreted twice
// second time, it looks for function calls
