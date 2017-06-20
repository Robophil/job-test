/**
 * function which accepts an author and returns books by that author 
 */

const books =  require("./books")

module.exports = (author) => {
    return books.filter( book => book.author == author)
}