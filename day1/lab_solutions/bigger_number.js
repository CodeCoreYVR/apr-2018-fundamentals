// Assignment: [Demo] Bigger number
// Write a Javascript code that defines two variables x and y with numbers and
// then prints to the console the larger of the two number printing.
// For instance print "The larger number is x"


// First solution
let firstNumber = parseInt(prompt("Please enter a number"))
let secondNumber = parseInt(prompt("Please enter another number"))

if (firstNumber > secondNumber) {
  console.log(`${firstNumber} is the larger number`)
} else {
  console.log(`${secondNumber} is the larger number`)
}


// Alternate solution
let x = parseInt(prompt("Please enter a number"));
let y = parseInt(prompt("Please enter another number"));

if (x > y) {
  console.log("x is greater thant y")
} else if (y > x) {
  console.log("y is greater thant x")
} else {
  console.log("Both numbers are equal")
}
