"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logOut = exports.logIn = void 0;
const user_model_1 = __importDefault(require("../../models/user.model"));
const jwt_1 = __importDefault(require("../../lib/jwt"));
const crypto_1 = __importDefault(require("crypto"));
const config_1 = __importDefault(require("../../config"));
const jwt = new jwt_1.default({ crypto: crypto_1.default, salt: config_1.default.salt });
const logIn = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, userPw } = req.body;
        if (!userId && !userPw)
            throw "입력값이 없습니다";
        const response = yield user_model_1.default.findOne({ where: { userId, userPw } });
        res.json(response);
    }
    catch (error) {
        next(error);
    }
});
exports.logIn = logIn;
const logOut = (req, res, next) => {
    try {
        console.log("logout");
    }
    catch (error) {
        next(error);
    }
};
exports.logOut = logOut;
