import { Router } from "express";
import { user, verification } from "./verification.js";

const router = Router();

router.route('/verify').get(verification);
router.route('/add').post(user);

export default router; 