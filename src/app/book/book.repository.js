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

async function findBooksByGenre(genre) {
    const books = await db
        .collection("books")
        .find({ genres: { $in: [genre] } })
        .toArray();
    return books;
}

async function findBooksSkipTwoAndSort() {
    const books = await db
        .collection("books")
        .find({})
        .skip(2)
        .sort({ year: -1 })
        .toArray();
    return books;
}

async function findBooksYearStoredAsInteger() {
    const books = await db
        .collection("books")
        .find({ year: { $type: "int" } })
        .toArray();
    return books;
}

async function findBooksByExcludeGenre(genre) {
    const books = await db
        .collection("books")
        .find({ genres: { $not: { $in: [...genre] } } })
        .toArray();
    return books;
}

async function deleteBooksBeforeYear(year) {
    const books = await db
        .collection("books")
        .deleteMany({ year: { $lt: year } });
    return books;
}

async function findBooksByAggregate1() {
    const books = await db
        .collection("books")
        .aggregate([
            { $match: { year: { $gte: 2000 } } },
            { $sort: { year: -1 } },
        ])
        .toArray();
    return books;
}

async function findBooksByAggregate2() {
    const books = await db
        .collection("books")
        .aggregate([
            { $match: { year: { $gte: 2000 } } },
            { $project: { title: 1, author: 1, year: 1, _id: 0 } },
        ])
        .toArray();
    return books;
}

async function findBooksByAggregate3() {
    const books = await db
        .collection("books")
        .aggregate([{ $unwind: "$genres" }])
        .toArray();
    return books;
}

async function findBooksByAggregate4() {
    const books = await db
        .collection("logs")
        .aggregate([
            {
                $lookup: {
                    from: "books",
                    localField: "book_id",
                    foreignField: "_id",
                    as: "book_details",
                },
            },
            {
                $project: {
                    action: 1,
                    "book_details.title": 1,
                    "book_details.author": 1,
                    "book_details.year": 1,
                    _id: 0,
                },
            },
        ])
        .toArray();
    return books;
}

export default {
    createBook,
    createMultipleBooks,
    updateBookFuture,
    findBookByTitle,
    findBooksByYear,
    findBooksByGenre,
    findBooksSkipTwoAndSort,
    findBooksYearStoredAsInteger,
    findBooksByExcludeGenre,
    deleteBooksBeforeYear,
    findBooksByAggregate1,
    findBooksByAggregate2,
    findBooksByAggregate3,
    findBooksByAggregate4,
};
