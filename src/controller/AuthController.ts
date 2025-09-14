import { Users } from "@prisma/client";
import { AuthService } from "../service/AuthService";
import { Request, Response } from "express";
import { schemaCreateUser } from "../validatore/UserValidatore";

    const authservice = new AuthService();


export class AuthController {
    private authservice = new AuthService();

    static async getAll(req: Request, res: Response){
        try {
            
            const users = await authservice.getAll();
            if(!users || users.length === 0){
                return res.status(404).json({ 
                    message: "Aucun Utilisateur trouvé",
                    data: []
                });
                }

                return res.status(200).json({
                    message: "Liste des utilisateurs: ",
                    data: users
                });


        } catch (error) {
            return res.status(500).json({
                message:"Erreur lors de la recuperation des utilisateurs",
                erreur: (error as Error).message
            });
        }
    }

    static async create(req: Request, res: Response){
       try {
        const data: Omit<Users, "id"> = schemaCreateUser.parse(req.body);
        const user = await authservice.create(data);
        return res.status(201).json({
            message: "Utilisateur creer avec succés",
            data:user
        });
        
       } catch (error) {
            res.status(500).json({
                message: "Erreur lors de la creation de l'utilisateur",
                erreur: (error as Error).message
            });
       }
    }

    static async delete(req: Request, res: Response){
        try {
            const id = Number(req.params.id);
            await authservice.delete(id);

            return res.status(200).json("Utilisateur supprimé avec succés");
            
        } catch (error) {
            return res.status(500).json({
                message:"Erreur lors de la suppression de l'utilisateur",
                erreur:(error as Error).message
            })
        }
        
    }
}