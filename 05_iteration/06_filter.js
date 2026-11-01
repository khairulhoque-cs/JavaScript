// Filter

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newNumber = numbers.filter( (num) => num > 5)
console.log(newNumber);

// Other Method
const newNumbers = numbers.filter( (num) => {
    return num > 4
} )
console.log(newNumbers);

// Example
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1982, edition: 2005 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1989, edition: 2007 },
    { title: 'Book Three', genre: 'Fiction', publish: 1988, edition: 2002 },
    { title: 'Book Four', genre: 'Math', publish: 1982, edition: 2007 },
    { title: 'Book Five', genre: 'Non-Fiction', publish: 1984, edition: 2006 },
    { title: 'Book Six', genre: 'History', publish: 1987, edition: 2008 },
    { title: 'Book Seven', genre: 'Fiction', publish: 2000, edition: 2002 },
    { title: 'Book eight', genre: 'Non-Fiction', publish: 1986, edition: 2001 },
    { title: 'Book Nine', genre: 'Science', publish: 1988, edition: 2004 },
    { title: 'Book Ten', genre: 'Fiction', publish: 1989, edition: 2003 },
];

let userBooks = books.filter( (bk) => bk.genre === 'Fiction')
userBooks = books.filter( (bk) => {
    return bk.publish >= 2000 && bk.genre == 'Science'
} )

console.log(userBooks);



