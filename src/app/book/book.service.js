import bookRepo from "./book.repository.js";

async function createBook(title, author, year, genres) {
    const book = await bookRepo.createBook(title, author, year, genres);
    return book;
}

async function createMultipleBooks(books) {
    const createdbooks = await bookRepo.createMultipleBooks(books);
    return createdbooks;
}

async function updateBookFuture(title, year) {
    const updatedBook = await bookRepo.updateBookFuture(title, year);
    return updatedBook;
}

async function getBook(title) {
    const book = await bookRepo.findBookByTitle(title);
    return book;
}

async function getBookByYear(from, to) {
    const books = await bookRepo.findBooksByYear(from, to);
    return books;
}

async function getBookByGenre(genre) {
    const books = await bookRepo.findBooksByGenre(genre);
    return books;
}

async function getBooksSkipTwoAndSort() {
    const books = await bookRepo.findBooksSkipTwoAndSort();
    return books;
}

async function getBooksYearStoredAsInteger() {
    const books = await bookRepo.findBooksYearStoredAsInteger();
    return books;
}

async function getBooksByExcludeGenre(genre) {
    const books = await bookRepo.findBooksByExcludeGenre(genre);
    return books;
}

async function deleteBooksBeforeYear(year) {
    const books = await bookRepo.deleteBooksBeforeYear(year);
    return books;
}

async function getBooksByAggregate1(){
    const books = await bookRepo.findBooksByAggregate1();
    return books;
}
async function getBooksByAggregate2(){
    const books = await bookRepo.findBooksByAggregate2();
    return books;
}
async function getBooksByAggregate3(){
    const books = await bookRepo.findBooksByAggregate3();
    return books;
}
async function getBooksByAggregate4(){
    const books = await bookRepo.findBooksByAggregate4();
    return books;
}

export default {
    createBook,
    createMultipleBooks,
    updateBookFuture,
    getBook,
    getBookByYear,
    getBookByGenre,
    getBooksSkipTwoAndSort,
    getBooksYearStoredAsInteger,
    getBooksByExcludeGenre,
    deleteBooksBeforeYear,
    getBooksByAggregate1,
    getBooksByAggregate2,
    getBooksByAggregate3,
    getBooksByAggregate4,
};
