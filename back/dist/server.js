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
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./config"));
const models_1 = __importDefault(require("./models"));
const user_model_1 = __importDefault(require("./models/user.model"));
const { localPort } = config_1.default;
app_1.default.listen(localPort, () => __awaiter(void 0, void 0, void 0, function* () {
    yield models_1.default.sync({ force: true });
    yield new user_model_1.default({ userId: "userId", userPw: "12344", nickName: "123124" }).save();
    console.log(`Back Server Start with ${localPort}`);
}));
