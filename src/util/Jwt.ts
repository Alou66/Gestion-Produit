import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export interface Paylaod {
    id:number;
    email: string;
}

export class Jwt {

    static genereToken(paylaod:Paylaod):string{
        return jwt.sign(paylaod, JWT_SECRET, {expiresIn: "15m"});
    }

    static verifieToken(token:string){
        return jwt.verify(token, JWT_SECRET);
    }

}