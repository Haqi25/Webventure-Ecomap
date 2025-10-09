import { Router } from "express";
import { averageSustainabilityScore } from "../controllers/calculateSustainabilityScore.controller.js";
const router = Router()

router.get("/:businessId/calculateScore", averageSustainabilityScore )

export default router;