import { Router } from "express";
import { store } from "../admin/controllers/category.controller.js"
import { getNearby, searchUmkm, businessId } from "../controllers/business.controller.js"
const router = Router();


router.get("/bisnis", searchUmkm)
router.post("/store", store)
router.get("/nearby", getNearby)
router.get("/:id", businessId )

export default router