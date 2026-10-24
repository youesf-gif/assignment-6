import { db } from "../../db/connection.js";

async function createLog(book_id, action) {
    const log = await db.collection("logs").insertOne({ book_id, action });
    return log;
}

export default { createLog };
