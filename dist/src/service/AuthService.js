"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const UserRepository_1 = require("../repository/UserRepository");
class AuthService {
    constructor() {
        this.userRepos = new UserRepository_1.UserRepository();
    }
    async getAll() {
        return await this.userRepos.getAll();
    }
    async create(data) {
        return await this.userRepos.create(data);
    }
    async delete(id) {
        await this.userRepos.delete(id);
    }
}
exports.AuthService = AuthService;
