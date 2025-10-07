import prisma from "../../db/index.js"



export  const allBusiness  = async() => {

  const business = await prisma.business.findMany({
   select : {
    isApproved: true || false,
    businessName : true,
    description : true,
    averageRating : true,
    reviews: true,
    address: true,
    photos : {where : 
      {isPrimary : true}
     },
    }
    
    })
   return business
}


export const detail = async({id}) => {

  const umkm = await prisma.business.findUnique(
    {where : {id : Number(id)},
   
  
    include : {
      category: true,
      owner: {
        select: {id: true, email: true, fullName: true}
      },
      photos: true,
      reviews: {
        include : {
          user : {
            select: {id : true, fullName:true, avatar:true}
          },

        },
        
      },
        sustainabilityPractices: true
    },
   
  })

  return umkm

}