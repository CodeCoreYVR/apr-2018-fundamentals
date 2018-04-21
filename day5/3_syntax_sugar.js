const van = {
  make: "Honda",
  // get rid of ': function'
  drive() { console.log(`A ${this.make} is driving...`)}
}

// this asks, who called this method?
van.drive();
