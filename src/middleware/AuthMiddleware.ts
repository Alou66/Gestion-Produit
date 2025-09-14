import { JwtPayload } from 'jsonwebtoken';
import { Jwt, Paylaod } from './../util/Jwt';
import { NextFunction, Request, Response } from 'express';

declare global{
    namespace Express {
        interface Request {
            user?: Paylaod;
        }
    }
}

export class AuthMiddleware {
    static authentification (req: Request, res:Response, next:NextFunction){
        const headers = req.headers["authorization"];
        if(!headers || !headers.startsWith("Bearer ")){

            return res.status(400).json({message:"Token manquant connecte toi dabord"});
            
        }
        const token = headers.split(" ")[1];

        try {
            const verifieToken = Jwt.verifieToken(token) as JwtPayload;
            req.user = {
                id: verifieToken.id,
                email: verifieToken.email
            }
            next();

        } catch (error) {
            res.status(500).json({message:"Token incorrecte ou expiré"});
            
        }
    }
}