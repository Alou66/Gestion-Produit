import { ProduitController} from '../controller/ProduitController';
import { Router } from "express";
import { AuthMiddleware } from '../middleware/AuthMiddleware';

const router = Router();
const ProduitContro = new ProduitController()

router.get("/", AuthMiddleware.authentification, (req, res) => ProduitContro.getAll(req, res));

router.get("/:id", AuthMiddleware.authentification, (req, res) => ProduitContro.getById(req, res));
router.post("/", AuthMiddleware.authentification, (req, res) => ProduitContro.create(req, res));
router.put("/:id", AuthMiddleware.authentification, (req, res) => ProduitContro.update(req, res));
router.delete("/:id", AuthMiddleware.authentification, (req, res) => ProduitContro.delete(req, res));

export default router;
