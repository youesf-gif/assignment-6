import logRepo from "./log.repository.js";

async function createLog(book_id, action) {
    const log = await logRepo.createLog(book_id, action);
    return log;
}

export default { createLog };
