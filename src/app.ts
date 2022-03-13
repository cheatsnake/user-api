import express, { Application } from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import path from "path";
import userRouter from "./routes/user.router";
import appRouter from "./routes/app.router";
import errorHandlerMiddleware from "./middlewares/error-handler.middleware";

export const app: Application = express();
export const staticDirPath = path.resolve(__dirname, "..", "static");

app.use(cors());
app.use(express.json());
app.use(express.static(staticDirPath));
app.use(fileUpload({}));

app.use("/api", userRouter);
app.use("/app", appRouter);

app.use(errorHandlerMiddleware);
