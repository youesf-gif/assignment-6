import logService from "./log.service.js";

async function createLog(req, res, next) {
    try {
        const { book_id, action } = req.body;
        const log = await logService.createLog(book_id, action);
        res.status(201).json({
            message: "Log created successfully",
            data: log,
        });
    } catch (error) {
        next(error);
    }
}

export default { createLog };
