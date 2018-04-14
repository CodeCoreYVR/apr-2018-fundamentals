// return - allows functions to become meaningful values
function addOne( number ) {
  // console.log is a developers tool to gain visibility into your code
  console.log( number + 1 );
}

addOne(5) == 6; // false

function addOne( number ) {
  // it makes the function call turn into a meaningful value
  return ( number + 1 );
}

addOne(5) == 6; // true

addOne(5) * 2;
addOne( addOne(5) ); // recursion

//
"Good Moring Class";
console.log("Good Morning Class");
let greeting = "Good Morning Class";
console.log( greeting );

// this is a function that takes in a name in the form of a string, and logs it out to the console.
function greet( name ) {
  console.log("Good Morning " + name);
  // console.log(`Good Morning ${name}`);
}

// this is a function that takes in a name, in the form of a string. and then turns into the concatenated string itself
function greet( name ) {
  return ("Good Morning " + name);
}

window.alert( greet("Jacob") );
document.write( greet("Jacob") );
console.log( greet("Jacob") );











//
