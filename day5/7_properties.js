// dynamic properties
// make a cookie class
class Cookie {
  constructor(sugarAmount, flourAmount, gluttenBoolean) {
    console.log("A cookie was created!");
    this.sugar = sugarAmount;
    this.flour = flourAmount;
    this.glutten = gluttenBoolean;
  }
}

const oatmeal = new Cookie(10, 20, false);
const chocolateChip = new Cookie(20, 25, true);
const shortBread = new Cookie(30, 30, true);

// make a House class
class House {
  constructor(colour, numFloors, roofType) {
    this.colour = colour;
    this.numFloors = numFloors;
    this.roofType = roofType;
  }
}
// create three instances of the House class: condo, duplex, lowRise
const condo = new House("pink", 1, "drywall");
const duplex = new House("beige", 2, "asphault shingle");
const lowRise = new House("white", 5, "metal");

// create 3 propeties: colour, numFloors, roofType
// set those 3 properties using parameters and arguments








//
