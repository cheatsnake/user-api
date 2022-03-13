import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import ErrorHandler from "../utils/error-handler.util";

export default function (
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (err instanceof ErrorHandler) {
        return res
            .status(err.status)
            .json({ message: err.message, errors: err.errors });
    }

    return res.status(500).json({ message: String(err) });
}
