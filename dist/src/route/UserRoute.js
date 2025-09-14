"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthController_1 = require("../controller/AuthController");
const router = (0, express_1.Router)();
router.get('/', AuthController_1.AuthController.getAll);
router.post('/', AuthController_1.AuthController.create);
router.delete('/:id', AuthController_1.AuthController.delete);
exports.default = router;
