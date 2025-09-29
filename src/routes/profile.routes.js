import { Router } from "express";
import { editProfile, profile } from "../controllers/profile.controller.js";
const router = Router();


router.get("/setting", profile)
router.patch("/edit-profile", editProfile)


export default router;