"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProduitRepository = void 0;
const client_1 = require("@prisma/client");
class ProduitRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async findAll() {
        return await this.prisma.produit.findMany();
    }
    async findById(id) {
        return await this.prisma.produit.findUnique({
            where: { id }
        });
    }
    async create(data) {
        return await this.prisma.produit.create({ data });
    }
    async update(id, data) {
        return await this.prisma.produit.update({ where: { id }, data });
    }
    async delete(id) {
        await this.prisma.produit.delete({ where: { id } });
    }
}
exports.ProduitRepository = ProduitRepository;
