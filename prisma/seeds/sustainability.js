import prisma from "../../src/db/index.js"

export const createSustainabilityPractices = async () => {
  const businesses = await prisma.business.findMany();

  if (businesses.length === 0) {
    console.warn("Tidak ada business ditemukan. Jalankan seed bisnis dulu!");
    return;
  }

  const data = [];

  for (const business of businesses) {
    data.push(
      //  Lingkungan
      {
        businessId: business.id,
        practiceType: "Lingkungan",
        practiceDescription: "Menggunakan kemasan ramah lingkungan dan mendaur ulang limbah.",
        workers: Math.floor(Math.random() * 10) + 3,
        isVerified : true
      },
      // Sosial
      {
        businessId: business.id,
        practiceType: "Sosial",
        practiceDescription: "Memberdayakan masyarakat sekitar dan memberikan pelatihan rutin.",
        workers: Math.floor(Math.random() * 10) + 5,
         isVerified : true
      },
      //  Ekonomi
      {
        businessId: business.id,
        practiceType: "Ekonomi",
        practiceDescription: "Mengutamakan bahan baku lokal untuk mendukung ekonomi daerah.",
        workers: Math.floor(Math.random() * 8) + 2,
         isVerified : true
      }
    );
  }

  await prisma.sustainabilityPractice.createMany({ data });
  console.log(" 3 sustainability practices added untuk setiap bisnis!");
};
