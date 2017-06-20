/**
 * function which accepts a collection of books and orders the books by ratings. 
 * Highest ratings first, lowest ratings last 
 */


module.exports = (books) => {
    return books.sort( (a, b) =>  b.ratings - a.ratings )
}