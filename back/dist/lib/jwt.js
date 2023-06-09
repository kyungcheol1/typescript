"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JWT {
    constructor({ crypto, salt }) {
        this.crypto = crypto;
        this.salt = salt;
    }
    createToken(payload) {
        const header = this.encode({ tpy: "JWT", alg: "HS256" });
        const middle = this.encode(payload);
        const signature = this.createSignature([header, middle]);
        return [header, middle, signature].join(".");
    }
    encode(value) {
        return Buffer.from(JSON.stringify(value)).toString("base64url");
    }
    decode(value) {
        return JSON.parse(Buffer.from(value, "base64url").toString("utf-8"));
    }
    createSignature(values, salt = this.salt) {
        const value = values.join(".");
        return this.crypto.createHmac("sha256", salt).update(value).digest("base64url");
    }
    verifyToken(token, salt = this.salt) {
        const [header, middle, signature] = token.split(".");
        const checksignature = this.createSignature([header, middle]);
        if (signature !== checksignature)
            return new Error("토큰값이 다릅니다");
        return this.decode(middle);
    }
}
exports.default = JWT;
