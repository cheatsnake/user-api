import { NextFunction, Request, Response } from "express";
import { RequestFiles } from "../types";
import { UserService } from "../services/user.service";
import { saveImage } from "../utils/save-image.util";

const userService = new UserService();

export class UserController {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const image = (req as RequestFiles).files?.image;
            if (image) {
                req.body.image = saveImage(image);
            }

            const user = await userService.create(req.body);

            return res.status(201).json(user);
        } catch (error) {
            next(error);
        }
    }

    async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            const user = await userService.findById(id);

            return res.json(user);
        } catch (error) {
            next(error);
        }
    }

    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await userService.findAll();

            return res.json(users);
        } catch (error) {
            next(error);
        }
    }

    async updateById(req: Request, res: Response, next: NextFunction) {
        try {
            const image = (req as RequestFiles).files?.image;
            if (image) {
                req.body.image = saveImage(image);
            }

            const id = Number(req.params.id);
            const result = await userService.updateById(id, req.body);

            return res.json(result);
        } catch (error) {
            next(error);
        }
    }

    async deleteById(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            const result = await userService.deleteById(id);

            return res.json(result);
        } catch (error) {
            next(error);
        }
    }
}
