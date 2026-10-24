import { Router } from "express";
import bookController from "./book.controller.js";

const bookRouter = Router();

bookRouter.post("/", bookController.createBook);
bookRouter.post("/batch", bookController.createMultipleBooks);
bookRouter.patch("/Future", bookController.updateBookFuture);
bookRouter.get("/title", bookController.getBook);
bookRouter.get("/year", bookController.getBookByYear);

export default bookRouter;
