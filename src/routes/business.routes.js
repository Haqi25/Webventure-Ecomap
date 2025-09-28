import { Router } from "express";
import { store } from "../controllers/category.controller.js"
import { getNearby, searchUmkm } from "../controllers/business.controller.js"
const router = Router();


router.get("/bisnis", searchUmkm)
router.post("/store", store)
router.get("/nearby", getNearby)

export default router