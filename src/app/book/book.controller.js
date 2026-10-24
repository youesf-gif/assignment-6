import bookService from "./book.service.js";

async function createBook(req, res, next) {
    try {
        const { title, author, year, genres } = req.body;
        const book = await bookService.createBook(title, author, year, genres);
        res.json({ message: "Book created successfully", data: book });
    } catch (error) {
        next(error);
    }
}

async function createMultipleBooks(req, res, next) {
    try {
        const books = req.body;
        const createdBooks = await bookService.createMultipleBooks(books);
        res.json({ message: "Books created successfully", data: createdBooks });
    } catch (error) {
        next(error);
    }
}

async function updateBookFuture(req, res, next) {
    try {
        const { year } = req.body;
        const updatedBook = await bookService.updateBookFuture("Future", year);
        res.json({ message: "Book updated successfully", data: updatedBook });
    } catch (error) {
        next(error);
    }
}

async function getBook(req, res, next) {
    try {
        const { title } = req.query;
        const book = await bookService.getBook(title);
        res.json({ message: "Book retrieved successfully", data: book });
    } catch (error) {
        next(error);
    }
}

async function getBookByYear(req, res, next) {
    try {
        const { from, to } = req.query;

        const books = await bookService.getBookByYear(Number(from), Number(to));

        res.json({ message: "Books retrieved successfully", data: books });
    } catch (error) {
        next(error);
    }
}

export default {
    createBook,
    createMultipleBooks,
    updateBookFuture,
    getBook,
    getBookByYear,
};
