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


export const reviewUpdate = async ({
   id,
   userId,
   ratingOverall,
   ratingSustainability,
    ratingQuality,
   comment,
}) => {
  const existing = await prisma.review.findUnique({
    where: { id: parseInt(id) },
  });

  if (!existing) {
    throw new Error("Review tidak ditemukan");
  }

  if (existing.userId !== userId) {
    throw new Error("Hanya pemilik review yang bisa mengedit");
  }

  const updated = await prisma.review.update({
    where: { id: parseInt(id) },
    data: {
      ...(ratingOverall !== undefined && { ratingOverall }),
      ...(ratingSustainability !== undefined && { ratingSustainability }),
      ...(ratingQuality !== undefined && { ratingQuality }),
      ...(comment !== undefined && { comment }),
    },
  });

  return updated;
};


export const reviewDestroy = async({id, userId}) => {
 const existing = await prisma.review.findUnique({
    where: { id: parseInt(id) },
  });

       if (!existing) {
    throw new Error("Review tidak ditemukan");
  }

  if (existing.userId !== userId) {
    throw new Error("Hanya pemilik review yang bisa menghapus");
  }

    const deleteReview = await prisma.review.delete({
          where :{
               id: parseInt(id)
          }

    })


  return deleteReview;
}