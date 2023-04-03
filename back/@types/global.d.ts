import { Request, Response, NextFunction } from "express";

interface Controller {
    (req: Request, res: Response, next: NextFunction): void;
}

interface User {
    user: string;
    age: number;
}

