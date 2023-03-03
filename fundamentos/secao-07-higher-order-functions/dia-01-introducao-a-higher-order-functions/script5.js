const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

console.log(books.find((year) => year.author.birthYear === 1947));

const smallerBook = () => {
  let smaller = books[0];
  books.forEach((book) => {
    if (book.name.length < smaller.name.length) {
      smaller = book;
    }
  });
  return smaller;
}

console.log(smallerBook());

console.log(books.find((length) => length.name.length === 26));


console.log(books.every((nascimento) => nascimento.birthYear > 1900 && nascimento.birthYear <= 2000));

const someBookWasReleaseOnThe80s = () => {
  const eightysBooks = books.some((decade) => decade.releaseYear > 1980 && decade.releaseYear <= 1990);
  return eightysBooks;
}  
console.log(someBookWasReleaseOnThe80s());

const expectedResult = false;

const authorUnique = () => {
  let years = [];
  for(let i = 0; i < books.length; i +=1) {
    years.push(books[i].author.birthYear);
  }
  return years.some((year, index) => years.indexOf(year) !== index);
}

console.log(authorUnique())
