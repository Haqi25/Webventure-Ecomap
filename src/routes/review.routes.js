import { Router } from "express";
import { addReview } from "../controllers/review.controller.js";
const router = Router();

router.post("/:businessId", addReview)

export default router;
