import { Router } from "express";
import { approvedPractice } from "../controllers/approval.sustainabilitypractice.js";
const router = Router()


router.patch("/:id/approvedPractice", approvedPractice)

export default router;
