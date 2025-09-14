"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProduitRepository = void 0;
const client_1 = require("@prisma/client");
class ProduitRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async findAll() {
        return await this.prisma.produits.findMany();
    }
    async findById(id) {
        return await this.prisma.produits.findUnique({
            where: { id }
        });
    }
    async create(data) {
        return await this.prisma.produits.create({ data });
    }
    async update(id, data) {
        return await this.prisma.produits.update({ where: { id }, data });
    }
    async delete(id) {
        await this.prisma.produits.delete({ where: { id } });
    }
}
exports.ProduitRepository = ProduitRepository;
