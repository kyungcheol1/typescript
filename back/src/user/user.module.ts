import sequelize from "../../models";
import User from "../../models/user.model";

import JWT from "../../lib/jwt";
import crypto from "crypto";
import config from "../../config";
const jwt = new JWT({ crypto, salt: config.salt });

import repository from "./user.repository";
import service from "./user.service";
import controller from "./user.controller";
import { ModelCtor } from "sequelize-typescript";

const UserRepository = new repository(User as ModelCtor<User>);
const UserService = new service({ UserRepository, jwt });
export const UserContoller = new controller({ UserService });

