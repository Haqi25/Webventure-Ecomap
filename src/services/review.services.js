import prisma from "../db/index.js"


export const reviewStore = async({  userId, businessId, ratingOverall, ratingSustainability,  ratingQuality, comment  }) => {


    const addReview = await prisma.review.create({ 
        data: {
            userId  ,
     ratingOverall,
     ratingSustainability,
      ratingQuality,
      comment,
      businessId,
 
        }
        
    })

    return {addReview}
}