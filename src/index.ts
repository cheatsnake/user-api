import "dotenv/config";
import fs from "fs";
import { app } from "./app";
import { staticDirPath } from "./app";
import database from "./configs/database.config";

const PORT: number = Number(process.env.PORT) || 5000;

const main = async () => {
    try {
        await database.authenticate();
        await database.sync();

        fs.access(staticDirPath, function (err) {
            if (err && err.code === "ENOENT") {
                fs.mkdirSync(staticDirPath);
            }
        });

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}...`);
        });
    } catch (error) {
        console.log(error);
    }
};

main();
