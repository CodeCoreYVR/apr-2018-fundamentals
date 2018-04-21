// this <- relative referencing
const car = {
  make: "Honda",
  drive: function() { console.log(`A ${car.make} is driving...`)}
}

car.drive();

const van = {
  make: "Honda",
  drive: function() { console.log(`A ${this.make} is driving...`)}
}

// this asks, who called this method?
van.drive();
