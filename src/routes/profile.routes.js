import { Router } from "express";
import { profile } from "../controllers/profile.controller.js";
const router = Router();


router.get("/setting", profile)


export default router;