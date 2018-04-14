// iteration
// looping

// while
// do..while
// for <-

// tradional for loop
for (let i=0; i<10; i++) {}

// data structures - to iterate
// arrays, of

let shoppingList = ["milk", "eggs", "cheese"];
// shoppingList[0];
// shoppingList[1];
// shoppingList[2];

for (let item of shoppingList) {
  console.log( item );
}

for (let item of shoppingList) {
  console.log("In my shopping cart there is: " + item );
}

let prices = [4.00, 3.50, 13.00];
// 20.50
// what is the total bill for my cart?
prices[0] + prices[1] + prices[2]; // 20.50

let sum = 0;

for (let price of prices) {
  sum += price;
}

console.log("The total of your shopping cart is: " + sum);

// objects, inside
const me = {
  name: "Jacob",
  age: 39
};

// what properties are in this object?
for (let property in me) {
  console.log(property);
}

// what values are in this object?
for (let property in me) {
  console.log(property);
  console.log(me.property);
}


const me = {
  name: "Jacob",
  age: 39
  // property: ???
};

// attribute accessor - get and set, getter and setters
me.name = "Prince";

// what properties are in this object?
// what values are in this object?
for (let property in me) {
  console.log(property);
  console.log(me[property]);
  console.log("The property " + property + " has the value " + me[property]);
}

Object.keys( me );
Object.values( me );


const me = {
  name: "Jacob",
  age: 39
  // property: ???
};

// attribute accessor - get and set, getter and setters
me.name = "Prince";

console.log( me );

me = "Jacob";

// grocery store
let shopping = ["milk", "eggs", "cheese"];
let prices = [4.00, 3.50, 13.00];

const item1 = {
  name: "milk",
  price: 4.00
}

const item2 = {
  name: "eggs",
  price: 3.50
}

const item3 = {
  name: "cheese",
  price: 13.00
}

let shoppingCart = [item1, item2, item3];

// what it total cost of my groceries???
// what is the total cost of item 1
item1.price + item2.price + item3.price; // 20.50

// nested for
let sum = 0;

for (let item of shoppingCart) {
  console.log( typeof item ); // object!!!
  sum += item.price;

  for (let property in item) {
    console.log("property: " + property);
    if (property == 'price') {
      sum += item[property];
    }
  }
}

console.log("The total of the cart is: " + sum);








//

// for each
