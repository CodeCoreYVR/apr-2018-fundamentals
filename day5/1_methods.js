// what is method?
// a function
// a function associated with an object or class

// push method, belongs to an array
shoppingList.push("cheese");

// game object example
const player1 = {
  name: "mario",
  image: "mario.png",
  height: 50,
  run: function(){ console.log("mario is running!") }
};
const player2 = {
  name: "luigi",
  image: "luigi.png",
  height: 70,
  jump: function() { console.log("luigi is jumping!") }
};

console.log(`Welcome to the castle, ${player1.name}!`);
console.log(`Welcome to the castle, ${player2.name}!`);
player1.run();
player2.jump();

// vehicle example
// make me a car object
// give it 3 properties and values: make, model, capacity
// give it a method: drive
// call the method

// locks in the data type of object
const car = {
  make: "Honda",
  model: "Odyssey",
  capacity: 7,
  // behaviour, methods
  drive: function() { console.log(`A ${car.make} ${car.model} that seats ${car.capacity} is driving...`) }
};

car.make; // "Honda"
car.drive();







//
