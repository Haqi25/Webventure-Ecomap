import { Router } from "express";
import { store, getAllCategory, searchCategory, editCategory, deleteCategory} from "../admin/controllers/category.controller.js";



const router = Router()
router.post("/store",store)
router.get("/allUmkm",getAllCategory )
router.get("/search", searchCategory)
router.patch("/editCategory/:id", editCategory)
router.delete("/deleteCategory/:id", deleteCategory)
export default router