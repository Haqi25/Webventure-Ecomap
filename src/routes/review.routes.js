import { Router } from "express";
import { addReview, deleteReview, patchReview} from "../controllers/review.controller.js";

const router = Router();

router.post("/:businessId", addReview)
router.patch("/:id", patchReview)
router.delete("/delete/:id", deleteReview)


export default router;
