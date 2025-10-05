import { Router } from "express";
import { createBusiness, 
    updateBusiness,
    addSustainabilityPractice, 
    addBusinessAnalytics } 
    from "../controllers/business.controller.js";

const router = Router();

router.post("/createBusiness",createBusiness);
router.patch("/editBusiness/:id", updateBusiness);
router.post("/business/:id/sustainability",addSustainabilityPractice)
router.post("/business/:id/analytics", addBusinessAnalytics)

export default router