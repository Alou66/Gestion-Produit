import { Produits } from '@prisma/client';
import { Request, Response} from 'express';
import { ProduitService } from './../service/ProduitService';
import { schemaCreateProduit } from '../validatore/ProduitValidatore';

export class ProduitController {
  private produitServ = new ProduitService();

  // Récupérer tous les produits
  async getAll(req: Request, res: Response) {
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
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Erreur interne du serveur",
      });
    }
  }

  async getById(req:Request, res:Response){
    const id = Number(req.params.id);
    try{
      const Produit = await this.produitServ.findById(id);
      if(!Produit){
        return res.status(404).json({
          message:"Produit non trouvé",
          data: null
        })
      }

    return res.status(200).json({
      message: "Produit trouvé avec succès",
      data: Produit
    });

  } catch (error) {
  
    return res.status(500).json({
      message: "Erreur lors de la récupération du produit",
      error: (error as Error).message
    });
  
  }
}
  // async create(req:Request, res:Response){
  //   try{
  //     const data : Omit<Produits, "id"> = schemaCreateProduit.parse (req.body);

  //     const produitData = {
  //     ...data,
  //     categorie: data.categorie ?? "ALIMENTAIRE"
  //   };

  //   //   const produitData = {
  //   //   ...data,
  //   //   datePeremption: new Date(data.datePeremption)
  //   // };

  //     const Produit = await this.produitServ.create(produitData);
  //     return res.status(201).json({
  //       message: "Produit créé avec succés",
  //       data: Produit
  //     });
  //   }catch(erreur){
  //     return res.status(500).json({
  //       message: "Erreur lors de la creation du produit",
  //       erreur: (erreur as Error).message
  //     });
  //   }
  // }


  async create(req: Request, res: Response) {
  try {
    // Validation avec Zod
    const data = schemaCreateProduit.parse(req.body);
    const user_id = req.user?.id;

    // Ajout de la catégorie par défaut si elle n'est pas fournie
    const produitData = {
      ...data,
      categorie: data.categorie ?? "ALIMENTAIRE",
      id_user: user_id!
    };

    // Création du produit
    const Produit = await this.produitServ.create(produitData);

    return res.status(201).json({
      message: "Produit créé avec succès",
      data: Produit
    });
  } catch (erreur) {

    return res.status(500).json({
      message: "Erreur lors de la création du produit",
      erreur: (erreur as Error).message
    });
  }
}


  async update(req:Request, res:Response){
    try {

      const id = Number(req.params.id) ;
      const data: Partial<Produits> = schemaCreateProduit.parse(req.body);
      
    //   const produitData = {
    //   ...data,
    //   datePeremption: data.datePeremption ? new Date(data.datePeremption) : undefined
    // };
      const produit = await this.produitServ.update(id, data);
      res.status(200).json({
        message: "Produit modifié",
        data: produit
      });

    } catch (error) {
      res.status(500).json({
        message: "Erreur lors de la modification du produit",
        erreur: (error as Error).message
      });
    }
  }

  async delete (req:Request, res: Response){
    try {
      const id = Number(req.params.id);
      await this.produitServ.delete(id);
      res.status(200).json("Produit supprimé avec succès");

    } catch (error) {
      res.status(500).json({
        message:"Erreur lors de la suppression du produit",
        erreur: (error as Error).message
      });
      
    }
  }

}

