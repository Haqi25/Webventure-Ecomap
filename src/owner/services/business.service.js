import prisma from "../../db/index.js"



export const storeBusiness = async({
  businessName, description, address, latitude, longitude, 
  categoryId, phone, whatsapp, website, email, operatingHours, ownerId
}) => {
  
  const newBusiness = await prisma.business.create({
  data: {
    businessName,
    slug: businessName.toLowerCase().replace(/\s+/g, "-"),
    description,
    address,
    operatingHours,
    latitude,
    longitude,
    phone,
    categoryId,
    ownerId,
    whatsapp,
    website,
    email
  }
})

  return newBusiness
}

export const patchBusiness = async( {id, data, ownerId}) => {
    
    const business = await prisma.business.findUnique({where : {id:Number(id)}})


    if(!business) {
        throw new Error("umkm tidak ditemukan")
    }

    if(business.ownerId !== ownerId) {
       throw new Error("tidak memiliki akses")
    }

    const updated = await prisma.business.update({
        where : {id : Number(id)},
        data,
    })

    return business, updated
}


export const storeSustainabilityPractice = async({id, practiceType,practiceDescription, workers, ownerId}) => {

  const SustainabilityPractice = await prisma.sustainabilityPractice.create({

    data: {
      businessId : Number(id),
      practiceType,
      practiceDescription,
      workers
    }
  })


  const business  = await prisma.business.findUnique({where : {id: Number(id)}})

  if(!business){
      throw new Error("Umkm tidak di temukan")
  }

  if(business.ownerId !== ownerId) {
    throw new Error("anda tidak memiliki akses")
  }


  return SustainabilityPractice
}


export const storeBusinessAnalytics = async({businessId, actionType, metaData}) => {

  const business = await prisma.businessAnalytics.create({

    data: {
      businessId,
      actionType,
      metaData
    }
 
  })

  return business
}