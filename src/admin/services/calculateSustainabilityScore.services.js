
import prisma from "../../db/index.js";


export const calculateSustainabilityScore = async({businessId}) => {

    const verifyPractice  = await prisma.sustainabilityPractice.findMany({

     where : {
      businessId : Number(businessId),
      isVerified : true
     }
    })

    if(verifyPractice.length ===  0 ) {
         await prisma.business.update({
            where : {id :Number(businessId)},
            data : {sustainabilityScore : 0}
         })
         return 0;
    }

    const totalScore = verifyPractice.reduce((sum, p) => sum + p.scoreWeight, 0)
    const averageScore = Math.round(totalScore/verifyPractice.length)


   const Score =  await prisma.business.update({
        where : {id : Number(businessId)},
        data : {sustainabilityScore : averageScore}
    })

  return Score
} 
