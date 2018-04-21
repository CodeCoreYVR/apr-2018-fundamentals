function add(number1, number2) {
  return number1 + number2;
}
add(5, 6); // 11

function subtract(number1, number2) {
  return number1 - number2;
}
function multiply(number1, number2) {
  return number1 * number2;
}
function divide(number1, number2) {
  return number1 / number2;
}

function calc(number1, operation, number2) {
  return operation(number1, number2);
}
calc(5, add, 6); // 11
calc(5, subtract, 6); // -1
calc(5, multiply, 6); // 30
calc(5, divide, 6); // 0.83333
