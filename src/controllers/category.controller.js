import { categoryStore } from "../admin/services/category.services.js";


export const store = async (req, res) => {

    try {
        
        const {name, slug, icon, description} = req.body;

        const newCategory = await categoryStore({name, slug, icon, description})
        res.json({message : "Kategori Berhasil dibuat", newCategory})
    } catch (error) {
        return res.status(500).json({error : error.message})
    }
}