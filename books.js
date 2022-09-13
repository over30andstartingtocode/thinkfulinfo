function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

//helper function for partitionBooksByBorrowedStatus(books)
function returnedBook(book) {
  return book.borrows.every((borrow) => borrow.returned);
}

function partitionBooksByBorrowedStatus(books) {
  const booksCheckedOut = [];
  const booksReturned = [];
  books.map((book) => {
    returnedBook(book) ? booksReturned.push(book) : booksCheckedOut.push(book);
  });
  const bookLog = [[...booksCheckedOut], [...booksReturned]];
  return bookLog;
}


function getBorrowersForBook(book, accounts) {
  const borrowers = [];
  book.borrows.map((borrow) => {
    let foundAccount = accounts.find((account) => account.id === borrow.id);
    foundAccount = {...foundAccount, returned: borrow.returned};
    borrowers.push(foundAccount);
  });
  return borrowers.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
