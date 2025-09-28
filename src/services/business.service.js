import prisma from "../db/index.js";


export const search = async({q, category}) =>{
      
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
const Business = await prisma.business.findMany({
    
    where,
    include : {
        category : true,
        photos:{ where: { isPrimary: true }, take: 1 },
        reviews:true

    },
    orderBy: {sustainabilityScore: "desc"},

})

return {Business}
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