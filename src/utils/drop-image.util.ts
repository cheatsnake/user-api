import fs from "fs";
import path from "path";

export const dropImage = (imageName: string) => {
    const imagePath = path.resolve(__dirname, "..", "..", "static", imageName);

    fs.access(imagePath, function (err) {
        if (err && err.code === "ENOENT") {
            return;
        }

        fs.unlink(imagePath, (error) => {
            if (error) throw error;
        });
    });
};
