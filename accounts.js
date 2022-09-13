function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => {
    return accountA.name.last < accountB.name.last ? -1 : 1;
  });
}
// helper function for getTotalNumberOfBorrows()
function individualBookBorrows(book, id) {
  let total = 0;
  for(let key in book.borrows) {
    if(book.borrows[key].id === id) {
       total++;
    }
  }
  return total;
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((total, book) => {
    return total + individualBookBorrows(book, account.id);
  }, 0);
  
}

function getBooksPossessedByAccount(account, books, authors) {
  const notReturnedBooks = books.filter((book) => {
    return book.borrows.some((borrow) => {
      return borrow.returned === false && borrow.id === account.id;
    });
  });  

  const bookMap = notReturnedBooks.map((book) => {
    const {borrows, ...other} = book;
    const auth = authors.find((author) => author.id === book.authorId);
    return {...other, author: auth, borrows};
  });
  return bookMap;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
