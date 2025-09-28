import prisma from "../../db/index.js"

export const categoryStore = async ({name, slug, icon, description}) =>{
    
     const category = await prisma.category.create(
              
            {
                data:
                {name, slug, icon, description}
            }
        )

        return {category}
}