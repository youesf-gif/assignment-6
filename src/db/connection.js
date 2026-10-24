import { MongoClient } from "mongodb";
import { DB_URI, DB_NAME } from "../config/config.js";

const mongoClient = new MongoClient(DB_URI);

try {
    mongoClient.connect();
    console.log("connect to DB successfully");
} catch (error) {
    mongoClient.close();
    console.log("failed to connect to DB", error);
}

export const db = mongoClient.db(DB_NAME);
