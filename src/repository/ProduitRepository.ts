import { PrismaClient, Produits } from "@prisma/client";
import { IRepository } from "./IRepository";


export class ProduitRepository implements IRepository <Produits> {

    private prisma = new PrismaClient();

    async findAll(): Promise<Produits[]> {
        return await this.prisma.produits.findMany();
        
    }
    async findById(id: number): Promise< Produits | null> {
        return await this.prisma.produits.findUnique({
            where :{id}
        });
    }

    async create(data: Omit<Produits, "id">): Promise<Produits> {
        return await this.prisma.produits.create({data});
    }

    async update(id: number, data: Partial<Produits>): Promise<Produits | null> {
        return await this.prisma.produits.update({where:{id}, data});
    }

    async delete(id: number): Promise<void> {
        await this.prisma.produits.delete({where :{id}});
    }

}