import { Router, Request } from "express";
import { login, register } from "./auth.controller";
import { validateEmailAndPassword } from "./auth.middleware";

const router = Router();

router.post("/register", validateEmailAndPassword, register);
router.post("/login", validateEmailAndPassword, login);

export default router;
