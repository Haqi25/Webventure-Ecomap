import prisma from "../db/index.js";


export const userProfile = async(userId) => {

     const user = await prisma.users.findUnique({
        where : { id: userId},
        select : {
            id : true,
            fullName :true,
            email : true,
            phone : true,
           avatar : true,
        }
        
    });
      if (!user) return res.status(404).json({ error : "user not found"})

    return {user}

}