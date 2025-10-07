import prisma from "../../db/index.js"

export const approval = async({id,scoreWeight, isVerified })  => {

    const practice = await prisma.sustainabilityPractice.update({
        where : {id : Number(id)},
        data : {
            scoreWeight,
            isVerified,
        }

    })

    return practice
}

