"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const setMiddleware = (app) => {
    app.use((0, cors_1.default)({
        origin: true,
        credentials: true,
    }));
    app.use(express_1.default.json());
    app.use(routes_1.default);
};
const setErrorHandler = (app) => {
    app.use((err, req, res, next) => {
        res.status(500).send(err.message);
    });
};
const App = () => {
    const app = (0, express_1.default)();
    setMiddleware(app);
    setErrorHandler(app);
    return app;
};
exports.default = App();
