import { db } from "../../db/connection.js";

async function findBookByTitle(title) {
    const book = await db.collection("books").findOne({ title });
    return book;
}

async function findBooksByYear(from, to) {
    const books = await db
        .collection("books")
        .find({ year: { $gte: from, $lte: to } })
        .toArray();
    return books;
}

async function createBook(title, author, year, genres) {
    const book = await db.collection("books").insertOne({
        title,
        author,
        year,
        genres,
    });

    return book;
}

async function createMultipleBooks(books) {
    const createdBooks = await db.collection("books").insertMany(books);

    return createdBooks;
}

async function updateBookFuture(title, year) {
    const updatedBook = await db
        .collection("books")
        .updateOne({ title }, { $set: { year } });
    return updatedBook;
}

export default {
    createBook,
    createMultipleBooks,
    updateBookFuture,
    findBookByTitle,
    findBooksByYear,
};
