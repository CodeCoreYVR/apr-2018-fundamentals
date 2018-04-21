// events
// when an event occurs, we handle it...
// tie into DOM: Document Object Model

// running multiple functions in higher order
function addOne( number ) {
  return number + 1;
}

function timesTwo( number ) {
  return number * 2;
}

function subtractThree( number ) {
  return number -3;
}

let fnList = [addOne, timesTwo, subtractThree];

// call(number, arrFn);
function call(number, arrFn) {
  for (let fn of arrFn) {
    number = fn(number);
  }
  return number;
}
call(100, fnList); // 199










let numbers = [1,2,3,4,5];
let fnList = [addOne, timesTwo, subtractThree];

function call(arrNums, arrFn) {
  let results = [];
  for (let num of arrNums) {
    for (let fn of arrFn) {
      num = fn(num);
    }
    results.push(num);
  }

  return results;
}

call(numbers, fnList);





// [1, 3, 5, 7, 9];




// 100 + 1 * 2 - 3 = 199
//
