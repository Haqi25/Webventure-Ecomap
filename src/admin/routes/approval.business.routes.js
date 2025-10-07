import { Router } from "express";

import { getApproveBusiness, 
    getRejectedBusiness, 
    getPendingBusiness } 
    from "../controllers/approval.business.controller.js";

const router = Router()

router.get("/:id/approve", getApproveBusiness)
router.get("/:id/reject",getRejectedBusiness)
router.get("/pendingBusiness", getPendingBusiness)

export default router;