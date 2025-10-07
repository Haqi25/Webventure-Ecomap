import { Router } from "express";
import { findAllBusiness, detailBusiness } from "../controllers/business.controller.js";
const router = Router();

router.get("/allumkm", findAllBusiness)
router.get("/:id/umkm",  detailBusiness)


export default router;