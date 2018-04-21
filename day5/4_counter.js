// a new way to count :)
let counter = 0;
counter++; // check
counter--; // check
counter += 2; // ?
counter -= 3; // ?

// what if we made a counter object?
const counter = {
  number: 0,
  // method
  increaseByOne() { this.number++ },
  decreaseByOne() { this.number-- },
  increaseByTwo() { this.number += 2 },
  decreaseByThree() { this.number -= 3 },
  changeBy( num ) { this.number += num }
};

counter.number;
counter.changeBy(2);
counter.changeBy(-3);
