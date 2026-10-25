import { Router } from "express";
import bookController from "./book.controller.js";

const bookRouter = Router();

bookRouter.post("/", bookController.createBook);
bookRouter.post("/batch", bookController.createMultipleBooks);
bookRouter.patch("/Future", bookController.updateBookFuture);
bookRouter.get("/title", bookController.getBook);
bookRouter.get("/year", bookController.getBookByYear);
bookRouter.get("/genre", bookController.getBookByGenre);
bookRouter.get("/skip-limit", bookController.getBooksSkipTwoAndSort);
bookRouter.get("/year-integer", bookController.getBooksYearStoredAsInteger);
bookRouter.get("/exclude-genre", bookController.getBooksByExcludeGenre);
bookRouter.delete("/before-year", bookController.deleteBooksBeforeYear);
bookRouter.get("/aggregate1", bookController.getBooksByAggregate1);
bookRouter.get("/aggregate2", bookController.getBooksByAggregate2);
bookRouter.get("/aggregate3", bookController.getBooksByAggregate3);
bookRouter.get("/aggregate4", bookController.getBooksByAggregate4);

export default bookRouter;
