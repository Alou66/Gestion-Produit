import { PrismaClient, Produit } from "@prisma/client";
import { IRepository } from "./IRepository";


export class ProduitRepository implements IRepository <Produit> {

    private prisma = new PrismaClient();

    async findAll(): Promise<Produit[]> {
        return await this.prisma.produit.findMany();
        
    }
    async findById(id: number): Promise< Produit | null> {
        return await this.prisma.produit.findUnique({
            where :{id}
        });
    }

    async create(data: Omit<Produit, "id">): Promise<Produit> {
        return await this.prisma.produit.create({data});
    }

    async update(id: number, data: Partial<Produit>): Promise<Produit | null> {
        return await this.prisma.produit.update({where:{id}, data});
    }

    async delete(id: number): Promise<void> {
        await this.prisma.produit.delete({where :{id}});
    }

}