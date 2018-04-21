// javascript is interpreted twice, there are 2 passes when compiling

// declaritive functions
insult( "Joey" );

function insult( name ) {
  console.log(`$(name ) is a doofus!`);
}

// expressive function, function expression
// anonymous function
// unknown, no name

// a function that has no name
function ( name ) {
  console.log(`$(name ) is a doofus!`);
}

// functions are just values
// strings are values "something"
// functions are values function(){}


insult(); // errors

let insult = function ( name ) {
  console.log(`$(name ) is a doofus!`);
}; // <- valid?

insult();

// we use expressive functions when we want to control SCOPE
