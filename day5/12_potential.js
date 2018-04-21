// mapping
// [1,2,3,4,5]
// remapped - squaring
// square mapping
// [1,4,9,16,25]



let numbers = [1,2,3,4,5];

function square(number) {
  return number * number;
  // return number ** 2;
}

function addOne(number) {
  return number + 1;
  // return number ** 2;
}

function map(arr, fn){
  let result = [];

  for (let elm of arr) {
    result.push( fn(elm) );
  }

  return result;
}

map(numbers, square);
map(numbers, addOne);




//
