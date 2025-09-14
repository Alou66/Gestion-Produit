"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET;
class Jwt {
    static genereToken(paylaod) {
        return jsonwebtoken_1.default.sign(paylaod, JWT_SECRET, { expiresIn: "15m" });
    }
    static verifieToken(token) {
        return jsonwebtoken_1.default.verify(token, JWT_SECRET);
    }
}
exports.Jwt = Jwt;
