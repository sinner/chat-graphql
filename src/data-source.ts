import "reflect-metadata"
import 'dotenv/config';
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number.parseInt(process.env.DB_PORT || "5432"),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: true,
    entities: [User],
    migrations: ["src/migration/**/*.js"],
    subscribers: [],
    extra: {
        ssl: true
    },
});
