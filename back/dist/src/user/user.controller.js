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
Object.defineProperty(exports, "__esModule", { value: true });
class UserContoller {
    constructor({ UserService }) {
        this.UserService = UserService;
    }
    signUp(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId, userPw, nickName } = req.body;
                if (!userId && !userPw && !nickName)
                    throw "입력값이 없습니다.";
                const data = yield this.UserService.inputUser({ userId, userPw, nickName });
                res.json(data);
            }
            catch (error) {
                next(error);
            }
        });
    }
    checkId(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId } = req.body;
                const checked = yield this.UserService.check({ userId });
                res.json(checked);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = UserContoller;
