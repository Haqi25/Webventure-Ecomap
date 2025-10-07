import prisma from "../../db/index.js"


export const approveBusiness = async({id}) => {

    const approve = await prisma.business.update({

        where : {id : Number(id)},
        data : {isApproved : true}
    })
    return approve
}
 
export const rejectBusiness = async({id}) => {

    const reject = await prisma.business.update({
        
        where : {id : Number(id)},
        data : {isApproved: false}
    })
    return reject
}


export const pendingBusiness = async()=> {

    const pending = await prisma.business.findMany({

        where : {isApproved : false}
    })

    return pending
}