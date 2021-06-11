"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class JwtHandler {
    static createToken(payload) {
        const maxAge = 3 * 24 * 60 * 60 * 1000;
        return jsonwebtoken_1.default.sign(payload, process.env.SECRET_TOKEN, {
            expiresIn: maxAge,
        });
    }
    static verifyToken() { }
    static getUserByToken() { }
}
exports.default = JwtHandler;
