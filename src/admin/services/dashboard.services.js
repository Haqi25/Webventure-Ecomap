import prisma from "../../db/index.js"



export const getDataDashboard = async() => {

    const totalBusiness = await prisma.business.count()
    const userActive =await prisma.users.count({ where: {isVerified: true}})
    const review = await prisma.review.count()

     const byCategory = await prisma.business.groupBy({
      by: ["categoryId"],
      _count: { id: true }
    });


    return {totalBusiness, userActive, review, byCategory}
}