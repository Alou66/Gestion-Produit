import { ProduitRepository } from './../repository/ProduitRepository';
import { IRepository } from "../repository/IRepository";
import { Produits } from '@prisma/client';


export class ProduitService implements IRepository<Produits> {

    private ProduitRepo = new ProduitRepository();

    async findAll(): Promise<Produits[]>{
        return await this.ProduitRepo.findAll();
        }   

    async findById(id: number): Promise<Produits | null> {
        return await this.ProduitRepo.findById(id);
    }

    async create(data: Omit<Produits, 'id'>): Promise<Produits> {
        return await this.ProduitRepo.create(data);
    }
    async update(id: number, data: Partial<Produits>): Promise<Produits | null> {
        return await this.ProduitRepo.update(id, data)
    }
    
    async delete(id:number){
        return await this.ProduitRepo.delete(id)
    }
    
    }
