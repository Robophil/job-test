/**
 *  a module which exposes a function to find the top three books with the highest ratings, 
 *  and returns the contents of these books as an array of strings.
 */
const books = require("./books")
const orderedBooks =  require("./order-books-by-ratings")

module.exports = () => {
    return orderedBooks(books).slice(0, 3)
}