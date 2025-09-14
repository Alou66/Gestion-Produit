"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const AuthService_1 = require("../service/AuthService");
const UserValidatore_1 = require("../validatore/UserValidatore");
const authservice = new AuthService_1.AuthService();
class AuthController {
    static async getAll(req, res) {
        try {
            const users = await authservice.getAll();
            if (!users || users.length === 0) {
                return res.status(404).json({
                    message: "Aucun Utilisateur trouvé",
                    data: []
                });
            }
            return res.status(200).json({
                message: "Liste des utilisateurs: ",
                data: users
            });
        }
        catch (error) {
            return res.status(500).json({
                message: "Erreur lors de la recuperation des utilisateurs",
                erreur: error.message
            });
        }
    }
    static async create(req, res) {
        try {
            const data = UserValidatore_1.schemaCreateUser.parse(req.body);
            const user = await authservice.create(data);
            return res.status(201).json({
                message: "Utilisateur creer avec succés",
                data: user
            });
        }
        catch (error) {
            res.status(500).json({
                message: "Erreur lors de la creation de l'utilisateur",
                erreur: error.message
            });
        }
    }
    static async delete(req, res) {
        try {
            const id = Number(req.params.id);
            await authservice.delete(id);
            return res.status(200).json("Utilisateur supprimé avec succés");
        }
        catch (error) {
            return res.status(500).json({
                message: "Erreur lors de la suppression de l'utilisateur",
                erreur: error.message
            });
        }
    }
    static async connexion(req, res) {
        try {
            const { email, password } = req.body;
            const connexion = await authservice.connexion(email, password);
            return res.status(200).json({
                message: "Connexion reussie",
                userconnect: connexion
            });
        }
        catch (error) {
            return res.status(500).json({
                message: "Erreur lors de la connexion",
                erreur: error.message
            });
        }
    }
}
exports.AuthController = AuthController;
