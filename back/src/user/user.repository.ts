import { Model, ModelCtor } from "sequelize-typescript";
import { PointDown, PointUp, Quiz, User } from "../../models";

export interface Users {
    userId: string;
    userPw?: string;
    nickName?: string;
}

interface classModels {
    User?: User;
    Quiz?: Quiz;
    PointUp?: PointUp;
    PointDown?: PointDown;
}

class UserRepository {
    public User: ModelCtor<User>;
    constructor(User: ModelCtor<User>) {
        this.User = User;
    }

    async signUp({ userId, userPw, nickName }: Users) {
        try {
            const data = await this.User.create({ userId, userPw, nickName });
            return data.dataValues;
        } catch (error: any) {
            throw new Error();
        }
    }

    async checkValue({ userId }: Users): Promise<boolean> {
        try {
            const data = await this.User.findAll({ where: { userId } });
            const response = data ? true : false;
            return response;
        } catch (error: any) {
            throw new Error(error);
        }
    }
}

export default UserRepository;

