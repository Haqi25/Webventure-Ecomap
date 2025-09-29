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


export const updateProfile = async ({fullName, avatar, phone, userId}) =>{


     const dataToUpdate = {};
    if (fullName) dataToUpdate.fullName = fullName;
    if (avatar) dataToUpdate.avatar = avatar;
    if (phone) dataToUpdate.phone = phone;


    const user = await prisma.users.update({
      where : {id: userId},
      data : dataToUpdate,

      select : {
        fullName: true,
        avatar: true,
        phone: true,
        email: true,
      }
    })

    return {user}
}