/**
 *  a module which exposes a function to find the top three books with the highest ratings, 
 *  and returns the contents of these books as an array of strings.
 */

const orderedBooks =  require("./order-books-by-ratings")

module.exports = () => {
    return orderedBooks.slice(0, 3)
}