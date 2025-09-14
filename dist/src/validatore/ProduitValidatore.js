"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaCreateProduit = void 0;
const zod_1 = __importDefault(require("zod"));
exports.schemaCreateProduit = zod_1.default.object({
    libelle: zod_1.default.string().min(2, "Le libelle doit avoir au minimum 2 caractères").max(15, "Le libelle doit avoir au maximum 15 caractères"),
    categorie: zod_1.default.enum(["ALIMENTAIRE", "CHIMIQUE", "AGRICOLE"]).optional(),
    prix: zod_1.default.number().int().positive("Le prix doit être un entier positif"),
    quantiteStock: zod_1.default.number().int().nonnegative("La quantité doit être >= 0"),
    datePeremption: zod_1.default.preprocess((val) => (typeof val === "string" ? new Date(val) : val), zod_1.default.date()),
    id_user: zod_1.default.number().nullable().optional().transform((val) => val ?? null)
});
