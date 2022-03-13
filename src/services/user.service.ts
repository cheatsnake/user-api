import { UserModel } from "../models/user.model";
import { CreateUserDto } from "../dto/user.dto";
import { dropImage } from "../utils/drop-image.util";
import ErrorHandler from "../utils/error-handler.util";
import { ID_NOT_EXISTS } from "../constants/error.constants";

export class UserService {
    async create(dto: CreateUserDto) {
        try {
            const user = await UserModel.create(dto);
            return user;
        } catch (error) {
            throw ErrorHandler.badRequest(String(error));
        }
    }

    async findById(id: number) {
        try {
            const user = await UserModel.findOne({
                where: { id },
                attributes: { exclude: ["pdf"] },
            });
            if (!user) {
                throw ErrorHandler.notFound(ID_NOT_EXISTS);
            }

            return user;
        } catch (error) {
            throw error;
        }
    }

    async findAll() {
        try {
            const users = await UserModel.findAll({
                attributes: { exclude: ["pdf"] },
            });

            return users;
        } catch (error) {
            throw error;
        }
    }

    async updateById(id: number, dto: CreateUserDto) {
        try {
            const user = await this.findById(id);
            if (!user) {
                throw ErrorHandler.notFound(ID_NOT_EXISTS);
            }

            const userImage = user.getDataValue("image");
            if (userImage && userImage != dto.image && dto.image) {
                dropImage(userImage);
            }

            const result = await UserModel.update(dto, { where: { id } });

            return result;
        } catch (error) {
            throw ErrorHandler.badRequest(String(error));
        }
    }

    async deleteById(id: number) {
        try {
            await UserModel.destroy({ where: { id } });
        } catch (error) {
            throw error;
        }
    }
}
