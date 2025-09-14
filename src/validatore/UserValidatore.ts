import z from "zod";

export const schemaCreateUser = z.object({
    email: z.string().email(),
    password: z.string().min(4, "Password doit avoir au minimum 4 caractères").max(12, "Le libelle doit avoir au maximum 12 caractères")

})