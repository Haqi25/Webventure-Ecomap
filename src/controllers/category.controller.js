import prisma from "../db/index.js"


export const store = async (req, res) => {

    try {
        
        const {name, slug, icon, description} = req.body;


        const category = await prisma.category.create(
              
            {
                data:
                {name, slug, icon, description}
            }
        )

        res.json({message : "Kategori Berhasil dibuat", category})
    } catch (error) {
        return res.status(500).json({error : error.message})
    }
}