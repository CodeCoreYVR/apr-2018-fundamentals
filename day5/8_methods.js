// methods within a class
// i want to be able to eat my cookie
// i want to be able to bake my cookie
// i want to be able to throw my cookie away
class Cookie {
  constructor(sugar, flour, glutten) {
    console.log("A cookie is constructed");
    this.sugar = sugar;
    this.flour = flour;
    this.glutten = glutten;
  }
  // other methods
  bake() {
    console.log(`A cookie has been baked with ${this.sugar}g of sugar, ${this.flour}g of flour and is glutten-${this.glutten}.`);

    this.eat();
    this.garbage();
  }

  eat() {
    console.log("A cookie has been eaten");
  }

  garbage() {
    console.log("Yuck! A cookie is thrown in the garbage");
  }
}

const oreo = new Cookie(30, 20, true);
oreo.bake();
// oreo.eat();
// oreo.garbage();

// make the sugar, flour and glutten properties print out when we bake it
// "A cookie has been baked that had 10g of sugar, 20g of flour and glutten is false"
// "A cookie has been baked that had 10g of sugar, 20g of flour and glutten-free"

// class Array {
//   constructor() {}
//   push() {}
//   pop() {}
//   shift() {}
//   unshift() {}
// }










//
