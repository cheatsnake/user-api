import "dotenv/config";
import { Sequelize } from "sequelize";

const USER = process.env.POSTGRES_USER;
const PASSWORD = process.env.POSTGRES_PASSWORD;
const HOST = process.env.POSTGRES_HOST;
const PORT = process.env.POSTGRES_PORT;
const DB = process.env.POSTGRES_DB;

const database = new Sequelize(
    `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${DB}`
);

export default database;
