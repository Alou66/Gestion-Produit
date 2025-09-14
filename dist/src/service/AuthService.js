"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const UserRepository_1 = require("../repository/UserRepository");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const Jwt_1 = require("../util/Jwt");
class AuthService {
    constructor() {
        this.userRepos = new UserRepository_1.UserRepository();
    }
    async getAll() {
        return await this.userRepos.getAll();
    }
    async create(data) {
        const criptePassword = await bcryptjs_1.default.hash(data.password, 10);
        return await this.userRepos.create({
            ...data,
            password: criptePassword
        });
    }
    async delete(id) {
        await this.userRepos.delete(id);
    }
    async getByEmail(email) {
        return await this.userRepos.getByEmail(email);
    }
    async connexion(email, password) {
        const user = await this.getByEmail(email);
        if (!user) {
            throw new Error("Email incorrecte");
        }
        const decriptepassword = await bcryptjs_1.default.compare(password, user.password);
        if (!decriptepassword) {
            throw new Error("Password incorrecte");
        }
        const token = Jwt_1.Jwt.genereToken({ id: user.id, email: user.email });
        return { user, token };
    }
}
exports.AuthService = AuthService;
