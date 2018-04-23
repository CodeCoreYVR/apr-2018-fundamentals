// Assignment: Decaying Count
// Write some code that writes "1" to the console,
// then 1 second later writes "2" to the console,
// then 2 seconds after that writes "3" to the console,
// ...until it gets to "10".

const decayingCount = function() {
  for(let i = 0; i <= 10; i++) {
    setTimeout(function() {
      console.log(i)
    }, i * 1000)
  }
}

decayingCount()
