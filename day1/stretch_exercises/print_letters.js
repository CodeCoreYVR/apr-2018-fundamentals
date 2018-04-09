// Assignment: Stretch Exercise #1a
// Print letters
// Write a code that prints letters in increasing number as follows:

let letters = 'abcdefghijklmnopqrstuvwxyz'

for(let position = 0; position < letters.length; position ++) {
  let result = ""

  for(let i = 0; i <= position; i ++) {
    result += letters[position]
  }

  console.log(result)
}
