// multiple arguments
function addOne( number ) {
  console.log( number + 1 );
}

addOne( 10 ); // 11

// 4. able to pass in multiple arguments
function add( number1, number2 ) {
  console.log( number1 + number2 );
}

add( 5, 6 );
add( 10, 2 );
add( 3.141, 24601 );

function add( number1, number2, number3 ) {
  console.log( number1 + number2 + number3 );
}

add( 5, 6, 7 );
add( 10, 2, 1 );
add( 3.141, 24601, 2.0 );

// rest parameter
function add (...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  console.log( total );
}

add( 1, 2 );
add( 3, 4, 5 );
add( 6, 7, 8, 9, 10, 11, 12, 13, 14 );




//
