import prisma from "../db/index.js";


export const search = async({ q, category, page = 1, limit = 10}) =>{
      
     let where = {
            isActive : true,
            isApproved : true
         }

         if (q) {
      where.OR = [
        { businessName: { contains: q, mode: "insensitive" } },
        { description: { contains: q, mode: "insensitive" } },
      ];
    }

    if (category) {
        where.category = {slug : category}
    }
const business = await prisma.business.findMany({
    
    where,
    include : {
        category : true,
        photos:{ where: { isPrimary: true }, take: 1 },
        reviews:{
          select: {id: true}
        }

    },
    orderBy: {sustainabilityScore: "desc"},

})

//pagination

const total = await prisma.business.count({where});

return {
  data: business,
  meta: {
    total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
  }
}

}


export const nearby = async({ lat, lng, radius }) => {
 const latitude = parseFloat(lat);
    const longitude = parseFloat(lng);
    const distanceInKm = parseFloat(radius) || 10;

    // Approximate bounding box (±1° ~ 111km)
    const degreeRadius = distanceInKm / 111;

    const businesses = await prisma.business.findMany({
      where: {
        latitude: {
          gte: latitude - degreeRadius,
          lte: latitude + degreeRadius,
        },
        longitude: {
          gte: longitude - degreeRadius,
          lte: longitude + degreeRadius,
        },
        isActive: true,
        isApproved: true,
      },
      orderBy: {
        sustainabilityScore: "desc",
      },
    });

    // Hitung jarak pakai haversine manual di JS
    const toRad = (value) => (value * Math.PI) / 180;

    const withDistance = businesses
      .map((biz) => {
        const R = 6371; // Earth radius in km
        const dLat = toRad(biz.latitude - latitude);
        const dLon = toRad(biz.longitude - longitude);

        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(toRad(latitude)) *
            Math.cos(toRad(biz.latitude)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c;

        return { ...biz, distance };
      })
      .filter((biz) => biz.distance <= distanceInKm) // filter radius
      .sort((a, b) => a.distance - b.distance); // urut jarak terdekat

      return {withDistance}
}


export const business = async({id}) => {

  const umkm = await prisma.business.findUnique({where : {id},

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
  return(umkm)
}


export  const allBusiness  = async() => {


 

  
  const business = await prisma.business.findMany({
   where : {
    isApproved: true
   },
   
   select : {
    businessName : true,
    description : true,
    averageRating : true,
    reviews: true,
    address: true,
    photos : {where : 
      {isPrimary : true}
     }
    
   }
    
  })


  return business
}