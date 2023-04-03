"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointUp = exports.PointDown = exports.Quiz = exports.User = void 0;
const path_1 = __importDefault(require("path"));
const config_1 = __importDefault(require("../config"));
config_1.default.db.development;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_model_1 = __importDefault(require("./user.model"));
exports.User = user_model_1.default;
const quiz_model_1 = __importDefault(require("./quiz.model"));
exports.Quiz = quiz_model_1.default;
const pointdown_model_1 = __importDefault(require("./pointdown.model"));
exports.PointDown = pointdown_model_1.default;
const pointup_model_1 = __importDefault(require("./pointup.model"));
exports.PointUp = pointup_model_1.default;
const sequelize = new sequelize_typescript_1.Sequelize({
    host: "localhost",
    username: "root",
    password: "Qjel216!",
    database: "testtype",
    dialect: "mysql",
    models: [path_1.default.join(__dirname, "*.model.ts")],
});
sequelize.addModels([user_model_1.default, quiz_model_1.default, pointdown_model_1.default, pointup_model_1.default]);
exports.default = sequelize;
