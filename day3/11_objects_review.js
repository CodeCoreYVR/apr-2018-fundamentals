// objects
const car = {
  make: "Tesla",
  model: "Model 3",
  colour: "red",
  features: ["power windows", "AC", "keyless start"],
  capacity: 5,
  price: 90000,
  year: 2018,
  licensePlate: "ABC 123",
  // engine: "Electric"
};

// make a sentence that describes the make, model and capacity of the car
console.log(`I drive a ${car.year} ${car.make} ${car.model} that seats ${car.capacity} people`);

// add a property to the car: "engine"
// add the corresponding value: "electric"
car.engine;
car.engine = "Electric";

// remove a property from the car: licensePlate
car.licensePlate = "";
delete car.licensePlate;

// remove a feature
car.features.pop();


//
