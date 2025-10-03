import { adminDashboard } from "../../admin/controllers/dashboard.controller.js";
import { Router } from "express";

const router = Router()


router.get("/dashboard", adminDashboard)

export default router;