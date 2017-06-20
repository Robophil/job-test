const books = require('./books')

const print = result => console.log('Result:', result)

const filterBooksWithTitleStartingWithA = (sortedBooks, callback) => {
  let filteredBooks
  /* filter logic here */
  // return callback(filteredBooks)
  return Promise.resolve(filteredBooks)
}

const sortBooksAlphabetically = (books, callback) => {
  let sortedBooks
  /* sorting logic books */
  // return callback(sortedBooks, print)
  return Promise.resolve(sortedBooks)
}

const getBooksAsync = (callback) => {
  setTimeout(() => {
    //promise chain
    callback(books, null).then(sortedBooks => filterBooksWithTitleStartingWithA(sortedBooks, null).then(filteredBooks => print(filteredBooks)) )
  }, 2000)
  
}

getBooksAsync(sortBooksAlphabetically)
