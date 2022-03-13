import { NextFunction, Request, Response } from "express";
import { AppService } from "../services/app.service";

const appService = new AppService();

export class AppController {
    async createPdfByEmail(req: Request, res: Response, next: NextFunction) {
        try {
            const email = req.body.email;
            const result = await appService.createPdfByEmail(email);

            return res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }
}
