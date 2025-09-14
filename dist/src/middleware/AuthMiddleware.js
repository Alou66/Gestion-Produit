"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const Jwt_1 = require("./../util/Jwt");
class AuthMiddleware {
    static authentification(req, res, next) {
        const headers = req.headers["authorization"];
        if (!headers || !headers.startsWith("Bearer ")) {
            return res.status(400).json({ message: "Token manquant connecte toi dabord" });
        }
        const token = headers.split(" ")[1];
        try {
            const verifieToken = Jwt_1.Jwt.verifieToken(token);
            req.user = {
                id: verifieToken.id,
                email: verifieToken.email
            };
            next();
        }
        catch (error) {
            res.status(500).json({ message: "Token incorrecte ou expiré" });
        }
    }
}
exports.AuthMiddleware = AuthMiddleware;
