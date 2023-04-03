import app from "./app";
import config from "./config";
import sequelize from "./models";
import User from "./models/user.model";
const { localPort } = config;

app.listen(localPort, async () => {
    await sequelize.sync({ force: true });
    await new User({ userId: "userId", userPw: "12344", nickName: "123124" }).save();
    console.log(`Back Server Start with ${localPort}`);
});

