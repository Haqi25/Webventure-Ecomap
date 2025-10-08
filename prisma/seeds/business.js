import prisma from "../../src/db/index.js"


export const createBusinesses = async () => {
  const owners = await prisma.users.findMany({ where: { role: "UMKM" } });

console.log("Owners found:", owners);
  await prisma.business.createMany({
    data: [
      {
        businessName: "Kopi Lokal",
        slug: "kopi-lokal",
        description: "Kedai kopi dengan biji kopi pilihan dari Sumatera dan Toraja.",
        address: "Jl. Melati No. 23, Bandung",
        latitude: -6.9175,
        longitude: 107.6191,
        phone: "0229876543",
        whatsapp: "628111223344",
        website: "https://kopilokal.id",
        email: "info@kopilokal.id",
        operatingHours: {
          monday: "08:00-22:00",
          tuesday: "08:00-22:00",
          wednesday: "08:00-22:00",
          thursday: "08:00-22:00",
          friday: "08:00-23:00",
          saturday: "09:00-23:00",
          sunday: "09:00-21:00",
        },
        sustainabilityScore: 88,
        isActive: true,
        isApproved: true,
        averageRating: 4.5,
        totalReviews: 120,
        ownerId: owners[1].id,
        categoryId: 1, // Kuliner
      },
      {
        businessName: "Toko Batik Ayu",
        slug: "toko-batik-ayu",
        description: "Menjual batik tulis tradisional dengan sentuhan modern.",
        address: "Jl. Malioboro No. 88, Yogyakarta",
        latitude: -7.7956,
        longitude: 110.3695,
        phone: "0274112233",
        whatsapp: "628123009988",
        website: "https://batikayu.id",
        email: "contact@batikayu.id",
        operatingHours: {
          monday: "09:00-20:00",
          tuesday: "09:00-20:00",
          wednesday: "09:00-20:00",
          thursday: "09:00-20:00",
          friday: "09:00-21:00",
          saturday: "09:00-21:00",
          sunday: "09:00-19:00",
        },
        sustainabilityScore: 90,
        isActive: true,
        isApproved: true,
        averageRating: 4.7,
        totalReviews: 92,
        ownerId: owners[2].id,
        categoryId: 2, // Fashion
      },
      {
        businessName: "Kerajinan Bambu Asri",
        slug: "kerajinan-bambu-asri",
        description: "Kerajinan bambu ramah lingkungan dari pengrajin lokal.",
        address: "Jl. Mawar No. 30, Sleman",
        latitude: -7.758,
        longitude: 110.378,
        phone: "0274332211",
        whatsapp: "628912345678",
        website: "https://bambuasri.id",
        email: "info@bambuasri.id",
        operatingHours: {
          monday: "08:00-17:00",
          tuesday: "08:00-17:00",
          wednesday: "08:00-17:00",
          thursday: "08:00-17:00",
          friday: "08:00-17:00",
          saturday: "08:00-17:00",
          sunday: "Closed",
        },
        sustainabilityScore: 91,
        isActive: true,
        isApproved: true,
        averageRating: 4.8,
        totalReviews: 76,
        ownerId: owners[3].id,
        categoryId: 9, // Kerajinan
      },
      {
        businessName: "Warung Eco Lestari",
        slug: "warung-eco-lestari",
        description: "Warung makan ramah lingkungan yang menggunakan bahan organik lokal.",
        address: "Jl. Anggrek No. 12, Bogor",
        latitude: -6.595,
        longitude: 106.816,
        phone: "02518332211",
        whatsapp: "6281287654321",
        website: "https://warungeco.id",
        email: "lestari@warungeco.id",
        operatingHours: {
          monday: "09:00-21:00",
          tuesday: "09:00-21:00",
          wednesday: "09:00-21:00",
          thursday: "09:00-21:00",
          friday: "09:00-22:00",
          saturday: "09:00-22:00",
          sunday: "09:00-20:00",
        },
        sustainabilityScore: 95,
        isActive: true,
        isApproved: true,
        averageRating: 4.9,
        totalReviews: 154,
        ownerId: owners[4].id, 
        categoryId: 1, // Kuliner
      },
    ],
      skipDuplicates: true,
  });

  console.log("Businesses added successfully!");
};
