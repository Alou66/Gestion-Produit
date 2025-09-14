import { Users } from "@prisma/client";
import { UserRepository } from "../repository/UserRepository";

export class AuthService {
    private userRepos = new UserRepository();

    async getAll():Promise<Users[]>{
        return await this.userRepos.getAll();
    }

    async create(data:Omit<Users, "id">):Promise<Users>{
        return await this.userRepos.create(data);
    }

    async delete(id:number):Promise<void>{
        await this.userRepos.delete(id);
    }


}