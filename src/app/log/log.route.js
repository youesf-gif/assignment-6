import {Router} from "express";
import logController from "./log.controller.js";

const logRouter = Router();

logRouter.post("/", logController.createLog);

export default logRouter;