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

export default {
    createBook,
    createMultipleBooks,
    updateBookFuture,
    getBook,
    getBookByYear,
};
