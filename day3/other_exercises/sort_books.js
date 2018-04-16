// Assignment: Sort your books
// Write some code that keeps asking the user for book names until the user
// enters "exit". After typing exit the program should display all the entered
// book names sorted by the book name.

let books = []

while (true) {
  let book = prompt('What is your book?')

  if (book.toLowerCase() == 'exit') {
    break;
  } else {
    books.push(book)
  }
}

console.log(books.sort())
