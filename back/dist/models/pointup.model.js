"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const user_model_1 = __importDefault(require("./user.model"));
const quiz_model_1 = __importDefault(require("./quiz.model"));
let PointUp = class PointUp extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => quiz_model_1.default),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], PointUp.prototype, "quizId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], PointUp.prototype, "point", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.default),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], PointUp.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => quiz_model_1.default, { foreignKey: "quizId" }),
    __metadata("design:type", quiz_model_1.default)
], PointUp.prototype, "quiz", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_model_1.default),
    __metadata("design:type", user_model_1.default)
], PointUp.prototype, "user", void 0);
PointUp = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "PointUp",
        omitNull: true,
        timestamps: true,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
    })
], PointUp);
exports.default = PointUp;
