import { Request } from "express";

export interface RequestFiles extends Request {
    files: any;
}
