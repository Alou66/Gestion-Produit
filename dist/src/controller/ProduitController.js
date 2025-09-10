"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProduitController = void 0;
const ProduitService_1 = require("./../service/ProduitService");
class ProduitController {
    constructor() {
        this.produitServ = new ProduitService_1.ProduitService();
    }
    // Récupérer tous les produits
    async getAll(req, res) {
        try {
            const Produits = await this.produitServ.findAll();
            if (!Produits || Produits.length === 0) {
                return res.status(404).json({
                    message: "Aucun produit trouvé",
                    data: [],
                });
            }
            return res.status(200).json({
                message: "Liste des produits récupérée avec succès",
                data: Produits,
            });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Erreur interne du serveur",
            });
        }
    }
    async getById(req, res) {
        const id = Number(req.params.id);
        try {
            const Produit = await this.produitServ.findById(id);
            if (!Produit) {
                return res.status(404).json({
                    message: "Produit non trouvé",
                    data: null
                });
            }
            return res.status(200).json({
                message: "Produit trouvé avec succès",
                data: Produit
            });
        }
        catch (error) {
            return res.status(500).json({
                message: "Erreur lors de la récupération du produit",
                error: error.message
            });
        }
    }
    async create(req, res) {
        try {
            const data = req.body;
            const Produit = await this.produitServ.create(data);
            return res.status(201).json({
                message: "Produit créé avec succés",
                data: Produit
            });
        }
        catch (erreur) {
            return res.status(500).json({
                message: "Erreur lors de la creation du produit",
                erreur: erreur.message
            });
        }
    }
}
exports.ProduitController = ProduitController;
