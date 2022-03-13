import * as uuid from "uuid";
import path from "path";

export const saveImage = (image: any): string => {
    const imageName = `${uuid.v4()}.jpg`;
    image.mv(path.resolve(__dirname, "..", "..", "static", imageName));
    return imageName;
};
