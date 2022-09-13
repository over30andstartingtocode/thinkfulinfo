function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.reduce((total, book) => {
    return (total + book.borrows.reduce((last, borrow) => {
      return last + !borrow.returned ? 1 : 0;
      }, 0)
    );
  }, 0);
}

function getMostCommonGenres(books) {
  const genres = [];
  books.map((book) => {
    const foundGenre = genres.find((genre) => genre.name === book.genre);
    if (foundGenre) foundGenre.count++;
    else genres.push({name: book.genre, count: 1});
  });
  genres.sort((genreA, genreB) => (genreB.count - genreA.count));
  return genres.slice(0, 5);
}

function getMostPopularBooks(books) {
  const mostPopular = [];
  books.map((book) => {
    mostPopular.push({name: book.title, count: book.borrows.length});
  });
  mostPopular.sort((bookA, bookB) => (bookB.count - bookA.count));
  return mostPopular.slice(0,5);
}

function getMostPopularAuthors(books, authors) {
  const popularAuthor = [];
  authors.map((author) => {
    const name = `${author.name.first} ${author.name.last}`;
    const foundAuthor = popularAuthor.find((authorInfo) => authorInfo.name === name);
    const count = books.reduce((total, book) => {
      return total + (book.authorId === author.id ? book.borrows.length : 0)
    }, 0);
    if (foundAuthor) foundAuthor.count += count;
    else popularAuthor.push({name: name, count: count});
  });
  popularAuthor.sort((authorA, authorB) => authorB.count - authorA.count);
  return popularAuthor.slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
