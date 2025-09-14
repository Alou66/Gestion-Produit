"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const client_1 = require("@prisma/client");
class UserRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async getAll() {
        return await this.prisma.users.findMany();
    }
    async create(data) {
        return await this.prisma.users.create({ data });
    }
    async delete(id) {
        await this.prisma.users.delete({
            where: { id }
        });
    }
    async getByEmail(email) {
        return await this.prisma.users.findUnique({
            where: { email }
        });
    }
}
exports.UserRepository = UserRepository;
