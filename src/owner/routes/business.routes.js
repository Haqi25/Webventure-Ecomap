import { Router } from "express";
import { createBusiness } from "../controllers/business.controller.js";

const router = Router();

router.post("/createBusiness",createBusiness);

export default router