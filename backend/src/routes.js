import { Router } from "express";
import { verification } from "./verification.js";

const router = Router();

router.route('/verify').get(verification);

export default router; 