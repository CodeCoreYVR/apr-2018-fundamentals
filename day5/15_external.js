// external libraries
// https://lodash.com/
// http://underscorejs.org/

let numbers = [1,2,3,4,5];

function isEven( number ) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function isEven( number ) {
  return (number % 2 === 0);
}

function isOdd( number ) {
  return (number % 2 != 0);
}

isEven(10);
isEven(11);
isOdd(10);
isOdd(11);

function filter(nums, fn) {
  let result = [];

  for (let num of nums) {
    if (fn(num)) {
      result.push(num);
    }
  }

  return result;
}

filter( numbers, isEven ); // [2,4]
filter( numbers, isOdd ); // [1,3,5]
