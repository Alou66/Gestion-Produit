import z from "zod";

export const schemaCreateProduit = z.object({
  libelle: z.string().min(2, "Le libelle doit avoir au minimum 2 caractères").max(15, "Le libelle doit avoir au maximum 15 caractères"),
  
  categorie: z.enum(["ALIMENTAIRE", "CHIMIQUE", "AGRICOLE"]).optional(),

  prix: z.number().int().positive("Le prix doit être un entier positif"),
  
  quantiteStock: z.number().int().nonnegative("La quantité doit être >= 0"),

  datePeremption: z.preprocess(
    (val) => (typeof val === "string" ? new Date(val) : val),
    z.date()
  ),

  id_user: z.number().nullable().optional().transform((val) => val ?? null)

});
