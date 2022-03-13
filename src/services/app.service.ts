import { UserModel } from "../models/user.model";
import { makePdf } from "../utils/make-pdf.util";
import {
    EMAIL_IS_REQUIRED,
    EMAIL_NOT_EXISTS,
} from "../constants/error.constants";
import ErrorHandler from "../utils/error-handler.util";

export class AppService {
    async createPdfByEmail(email: string) {
        try {
            if (!email) {
                throw ErrorHandler.badRequest(EMAIL_IS_REQUIRED);
            }

            const user = await UserModel.findOne({ where: { email } });
            if (!user) {
                throw ErrorHandler.notFound(EMAIL_NOT_EXISTS);
            }

            const pdf = await makePdf(
                user.getDataValue("firstName"),
                user.getDataValue("lastName"),
                user.getDataValue("image")
            );

            const result = await UserModel.update(
                { pdf },
                { where: { email } }
            );

            return Boolean(result.length);
        } catch (error) {
            throw error;
        }
    }
}
