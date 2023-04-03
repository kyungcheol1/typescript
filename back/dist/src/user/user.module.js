"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContoller = void 0;
const user_model_1 = __importDefault(require("../../models/user.model"));
const jwt_1 = __importDefault(require("../../lib/jwt"));
const crypto_1 = __importDefault(require("crypto"));
const config_1 = __importDefault(require("../../config"));
const jwt = new jwt_1.default({ crypto: crypto_1.default, salt: config_1.default.salt });
const user_repository_1 = __importDefault(require("./user.repository"));
const user_service_1 = __importDefault(require("./user.service"));
const user_controller_1 = __importDefault(require("./user.controller"));
const UserRepository = new user_repository_1.default(user_model_1.default);
const UserService = new user_service_1.default({ UserRepository, jwt });
exports.UserContoller = new user_controller_1.default({ UserService });
