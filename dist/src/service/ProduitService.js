"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProduitService = void 0;
const ProduitRepository_1 = require("./../repository/ProduitRepository");
class ProduitService {
    constructor() {
        this.ProduitRepo = new ProduitRepository_1.ProduitRepository();
    }
    async findAll() {
        return await this.ProduitRepo.findAll();
    }
    async findById(id) {
        return await this.ProduitRepo.findById(id);
    }
    async create(data) {
        return await this.ProduitRepo.create(data);
    }
    async update(id, data) {
        return await this.ProduitRepo.update(id, data);
    }
    async delete(id) {
        return await this.ProduitRepo.delete(id);
    }
}
exports.ProduitService = ProduitService;
