// objects - a thing
// - properties, can be used
// - specific properties
// - inanimate, not alive

// as a human we are born with senses:
// seeing, hearing, taste, touch, smell, 6th sense??
// describe to the computer an object

// objects - are the fundamental building blocks for anything meaningful in programming....

// everything starts with an object when we work with OOP - object oriented programming

// const me = new Object();
const me = {}; // object initializer
// const table = {};

const me = {
  // property: value
  name: "Jacob",
  hairColour: "black",
  age: 39,
  profession: "programmer"
};

me["name"]; // "Jacob"
// dot operator
me.name;
me.age;
me.profession;

let chosenProperty = 'hairColour';
me[ chosenProperty ]; // 'black'
// same as
me[ 'hairColour' ]; // 'black'


// an array is an object
const shoppingList = {
  0: "milk",
  1: "eggs",
  2: "cheese",
  3: "beer"
};

shoppingList[0]; // "milk"


// complex object, because it has an array for values
const me = {
  // property: value
  names: ["Jacob", "Tran"],
  hairColour: ["black", "white"],
  age: 39,
  profession: "programmer",
  hobbies: ["swimming", "scuba diving"]
};

// what is my last name?
me.names[1]; // "Tran"
// add "biking" as a hobby
me.hobbies.push("biking");

console.log( me );





//
