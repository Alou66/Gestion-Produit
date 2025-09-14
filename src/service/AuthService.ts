import { Users } from "@prisma/client";
import { UserRepository } from "../repository/UserRepository";
import bcryptjs from "bcryptjs";
import { Jwt } from "../util/Jwt";

export class AuthService {
    private userRepos = new UserRepository();

    async getAll():Promise<Users[]>{
        return await this.userRepos.getAll();
    }

    async create(data:Omit<Users, "id">):Promise<Users>{
        const criptePassword = await bcryptjs.hash(data.password, 10);
        
        return await this.userRepos.create({
            ...data,
            password:criptePassword
        });
    }

    async delete(id:number):Promise<void>{
        await this.userRepos.delete(id);
    }

    async getByEmail(email:string):Promise<Users | null>{
        return await this.userRepos.getByEmail(email);
    }

    async connexion(email:string, password:string){
        const user = await this.getByEmail(email);
        if(!user){
            throw new Error("Email incorrecte");
        }
        const decriptepassword = await bcryptjs.compare(password, user.password);
        if(!decriptepassword){
            throw new Error("Password incorrecte");
        }

        const token = Jwt.genereToken({id:user.id, email:user.email});
        
        return {user, token};
    }

}