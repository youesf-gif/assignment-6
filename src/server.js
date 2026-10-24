import express from "express";
import { PORT } from "./config/config.js";
import { db } from "./db/connection.js";
import bookRouter from "./app/book/book.route.js";
import logRouter from "./app/log/log.route.js";

const app = express();

app.use(express.json());
app.use("/books", bookRouter);
app.use("/logs", logRouter);

app.post("/collection/books", async (req, res, next) => {
    try {
        await db.createCollection("books", {
            validator: {
                $jsonSchema: {
                    bsonType: "object",
                    required: ["title"],
                    properties: {
                        title: {
                            bsonType: "string",
                            description: "must be a string and is required",
                        },
                    },
                },
            },
        });
        // console.log("collection created successfully", bookCollection);
        res.status(201).json({
            ok: 1,
        });
    } catch (error) {
        next(error);
    }
});

app.post("/collection/authors", async (req, res, next) => {
    try {
        const data = req.body;
        const authorCollection = await db.collection("authors").insertOne(data);

        res.json(authorCollection);
    } catch (error) {
        next(error);
    }
});

app.post("/collection/logs/capped", async (req, res, next) => {
    try {
        await db.createCollection("logs", {
            capped: true,
            size: 1000000,
        });

        res.json({ ok: 1 });
    } catch (error) {
        next(error);
    }
});

app.post("/collection/books/index", async (req, res, next) => {
    try {
        const titleIndex = await db
            .collection("books")
            .createIndex({ title: 1 });

        res.json({ titleIndex });
    } catch (error) {
        next(error);
    }
});

app.use((error, req, res, next) => {
    res.json({ message: error.message });
});

app.listen(PORT, () => {
    console.log(`server is running on port :: ${PORT}`);
});
