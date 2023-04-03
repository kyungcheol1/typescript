import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import router from "./routes";

const setMiddleware = (app: Application) => {
    app.use(
        cors({
            origin: true,
            credentials: true,
        })
    );
    app.use(express.json());
    app.use(router);
};

// const setRouter = (app) => {};

const setErrorHandler = (app: Application) => {
    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        res.status(500).send(err.message);
    });
};

const App = (): Application => {
    const app = express();
    setMiddleware(app);
    setErrorHandler(app);
    return app;
};

export default App();

