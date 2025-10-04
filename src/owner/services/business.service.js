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
