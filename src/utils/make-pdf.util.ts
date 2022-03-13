import pdfkit from "pdfkit";
import path from "path";
import getStream from "get-stream";

export const makePdf = async (
    firstName: string,
    lastName: string,
    imageName: string
) => {
    const pdfDoc = new pdfkit();

    pdfDoc
        .text(
            `${firstName.toLocaleUpperCase()} ${lastName.toLocaleUpperCase()}`
        )
        .fontSize(72);
    pdfDoc.image(
        path.resolve(__dirname, "..", "..", "static", `${imageName}`),
        { fit: [150, 150] }
    );
    pdfDoc.end();

    const pdfData = await getStream.buffer(pdfDoc);
    const binaryData = pdfData.toString("binary");

    return binaryData;
};
