import { PrismaClient, Users } from "@prisma/client";

export class UserRepository{
    private prisma = new PrismaClient();

    async getAll():Promise<Users[]>{
        return await this.prisma.users.findMany();
    }

    async create(data:Omit<Users, "id">): Promise<Users>{
        return await this.prisma.users.create({data});
    }

     async delete(id:number): Promise<void>{
        await this.prisma.users.delete({
            where :{id}
        });
    }

}