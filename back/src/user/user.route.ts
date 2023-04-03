import express, { Router, Request, Response, NextFunction } from "express";
import { UserContoller } from "./user.module";
const router: Router = express.Router();

//profile
router.post("/", (req: Request, res: Response, next: NextFunction) => UserContoller.signUp(req, res, next));

export default router;
