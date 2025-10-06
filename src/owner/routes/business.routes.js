import { Router } from "express";
import { createBusiness, 
    updateBusiness,
    addSustainabilityPractice, 
    addBusinessAnalytics, 
    addBusinessPhoto } 
    from "../controllers/business.controller.js";
import { upload } from "../../middlewares/multer.midleware.js";

const router = Router();

router.post("/createBusiness",createBusiness);
router.patch("/editBusiness/:id", updateBusiness);
router.post("/business/:id/sustainability",addSustainabilityPractice)
router.post("/business/:id/analytics", addBusinessAnalytics)
router.post("/business/:id/photo", upload.single("photo"), addBusinessPhoto)

export default router