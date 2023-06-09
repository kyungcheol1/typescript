// import fs from "fs";
import path from "path";
import config from "../config";
config.db.development;

import { Sequelize } from "sequelize-typescript";
import User from "./user.model";
import Quiz from "./quiz.model";
import PointDown from "./pointdown.model";
import PointUp from "./pointup.model";

const sequelize: Sequelize = new Sequelize({
    host: "localhost",
    username: "root",
    password: "Qjel216!",
    database: "testtype",
    dialect: "mysql",
    models: [path.join(__dirname, "*.model.ts")],
});

sequelize.addModels([User, Quiz, PointDown, PointUp]);

export { User, Quiz, PointDown, PointUp };

export default sequelize;

// export const sequelize = new Sequelize(db.database!, db.username!, db.password, db);
// //"Option에 string | undefind // string 강제로 넣어도 , Options 타입지정이 이미 string"

// fs.readdirSync(__dirname)
//     .filter((v) => v.indexOf("model") !== -1)
//     .forEach((filename) => {
//         require(path.join(__dirname, filename))({ sequelize, DataTypes, Model });
//     });

// const { models } = sequelize;

