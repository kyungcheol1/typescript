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
exports.UserService = void 0;
const crypto_1 = __importDefault(require("crypto"));
class UserService {
    constructor({ UserRepository, jwt }) {
        this.UserRepository = UserRepository;
        this.jwt = jwt;
        this.crypto = jwt.crypto;
    }
    inputUser({ userId, userPw, nickName }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (typeof userId === "string" && typeof userPw === "string") {
                    const pw = crypto_1.default.createHmac("sha256", this.jwt.salt).update(userPw).digest("hex");
                    const data = this.UserRepository.signUp({ userId, userPw: pw, nickName });
                    return data;
                }
            }
            catch (error) {
                new Error(error);
            }
        });
    }
    check({ userId }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = this.UserRepository.checkValue({ userId });
                return response;
            }
            catch (error) {
                new Error(error);
            }
        });
    }
}
exports.UserService = UserService;
exports.default = UserService;
