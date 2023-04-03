"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "/home/chl/nodejs/2023/202303/prac2/practice/back/.env" });
const database = process.env.DB_DATABASE ? process.env.DB_DATABASE : "terminus";
const localPort = process.env.LOCAL_PORT || "3000";
const port = process.env.DB_PORT ? parseInt(process.env.DB_PORT) : undefined;
const username = process.env.DB_USER;
const config = {
    localPort,
    salt: process.env.DB_SALT,
    db: {
        development: {
            port: port || 3306,
            host: process.env.DB_HOST,
            username: username,
            password: process.env.DB_PASSWORD,
            database,
            dialect: "mysql",
            timezone: "Asia/Seoul",
            dialectOptions: {
                dateStrings: true,
                typeCast: true,
            },
            define: {
                freezeTableName: true,
                timestamps: true,
            },
        },
        test: {},
    },
};
exports.default = config;
