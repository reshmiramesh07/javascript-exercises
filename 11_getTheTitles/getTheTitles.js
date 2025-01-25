const getTheTitles = function (books) {
  const allTitles = books.map(function (book) {
    return book.title;
  });
  return allTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
