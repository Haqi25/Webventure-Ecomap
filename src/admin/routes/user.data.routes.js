import { Router } from "express";
const router = Router()
import {  getAllDataUser, searchByEmailAndId, deleteById } from "../controllers/user.data.controller.js"



router.get("/userdata", getAllDataUser)
router.get("/searchUser", searchByEmailAndId )
router.delete("/:id",deleteById )

export default router;
