import { ProduitController} from '../controller/ProduitController';
import { Router } from "express";

const router = Router();
const ProduitContro = new ProduitController()

router.get("/", (req, res) => ProduitContro.getAll(req, res));

router.get("/:id", (req, res) => ProduitContro.getById(req, res));
router.post("/", (req, res) => ProduitContro.create(req, res));
// router.put("/:id", update);
// router.delete("/:id", remove);

export default router;
