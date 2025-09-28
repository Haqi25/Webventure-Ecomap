import { Router } from "express";
import { store } from "../controllers/category.controller.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";


const router = Router()
router.post("/store",store)

export default router