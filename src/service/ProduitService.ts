import { ProduitRepository } from './../repository/ProduitRepository';
import { IRepository } from "../repository/IRepository";
import { Produit } from '@prisma/client';


export class ProduitService implements IRepository<Produit> {

    private ProduitRepo = new ProduitRepository();

    async findAll(): Promise<Produit[]>{
        return await this.ProduitRepo.findAll();
        }   

    async findById(id: number): Promise<Produit | null> {
        return await this.ProduitRepo.findById(id);
    }

    async create(data: Omit<Produit, 'id'>): Promise<Produit> {
        return await this.ProduitRepo.create(data);
    }
    async update(id: number, data: Partial<Produit>): Promise<Produit | null> {
        return await this.ProduitRepo.update(id, data)
    }
    
    async delete(id:number){
        return await this.ProduitRepo.delete(id)
    }
    
    }
