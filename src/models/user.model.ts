import { DataTypes, Model } from "sequelize";
import { UserDto } from "../dto/user.dto";
import database from "../configs/database.config";

export class UserModel extends Model<UserDto> {}

UserModel.init(
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: { isEmail: true, len: [3, 50] },
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [2, 30] },
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [2, 30] },
        },
        image: { type: DataTypes.STRING, allowNull: true },
        pdf: { type: DataTypes.BLOB, allowNull: true },
    },
    {
        sequelize: database,
        tableName: "user",
    }
);
