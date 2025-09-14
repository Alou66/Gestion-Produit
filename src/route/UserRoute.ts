import { Router } from "express";
import { AuthController } from "../controller/AuthController";

const router = Router();

router.get('/', AuthController.getAll);
router.post('/', AuthController.create);
router.delete('/:id',AuthController.delete);
router.post('/connexion', AuthController.connexion);





export default router;