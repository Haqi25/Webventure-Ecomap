import prisma from "../src/db/index.js"


async function main() {
  // --- Tambah kategori ---
  const kuliner = await prisma.category.upsert({
    where: { slug: "kuliner" },
    update: {},
    create: {
      name: "Kuliner",
      slug: "kuliner",
      description: "UMKM makanan & minuman",
    },
  });

  const fashion = await prisma.category.upsert({
    where: { slug: "fashion" },
    update: {},
    create: {
      name: "Fashion",
      slug: "fashion",
      description: "UMKM pakaian & kerajinan tangan",
    },
  });

  // --- Tambah user (owner UMKM) ---
  const owner1 = await prisma.users.upsert({
    where: { email: "warung@example.com" },
    update: {},
    create: {
      email: "warung@example.com",
      password: "hashedpassword123",
      fullName: "Budi UMKM",
      phone: "081234567890",
      role: "UMKM",
      isVerified: true,
    },
  });

  const owner2 = await prisma.users.upsert({
    where: { email: "batik@example.com" },
    update: {},
    create: {
      email: "batik@example.com",
      password: "hashedpassword123",
      fullName: "Siti Batik",
      phone: "081298765432",
      role: "UMKM",
      isVerified: true,
    },
  });

  // --- Tambah bisnis (UMKM) ---
  const bisnis1 = await prisma.business.create({
    data: {
      businessName: "Warung Sederhana",
      slug: "warung-sederhana",
      description: "Makanan tradisional dengan bahan lokal dan kemasan ramah lingkungan.",
      address: "Jl. Merdeka No.10, Bandung",
      latitude: -6.914744,
      longitude: 107.60981,
      phone: "081234567890",
      whatsapp: "6281234567890",
      website: "https://warungsederhana.id",
      email: "info@warungsederhana.id",
      sustainabilityScore: 85,
      isActive: true,
      isApproved: true,
      ownerId: owner1.id,
      categoryId: kuliner.id,
    },
  });

  const bisnis2 = await prisma.business.create({
    data: {
      businessName: "Batik Lestari",
      slug: "batik-lestari",
      description: "UMKM batik dengan pewarna alami ramah lingkungan.",
      address: "Jl. Asia Afrika No.5, Bandung",
      latitude: -6.921,
      longitude: 107.613,
      phone: "081298765432",
      whatsapp: "6281298765432",
      website: "https://batiklestari.id",
      email: "cs@batiklestari.id",
      sustainabilityScore: 92,
      isActive: true,
      isApproved: true,
      ownerId: owner2.id,
      categoryId: fashion.id,
    },
  });

  // --- Tambah Sustainability Practices ---
  await prisma.sustainabilityPractice.createMany({
    data: [
      {
        practiceType: "Kemasan Ramah Lingkungan",
        practiceDescription: "Menggunakan kertas daur ulang dan biodegradable packaging.",
        isVerified: true,
        scoreWeight: 15,
        businessId: bisnis1.id,
      },
      {
        practiceType: "Bahan Lokal",
        practiceDescription: "Semua bahan makanan dipasok dari petani lokal.",
        isVerified: true,
        scoreWeight: 10,
        businessId: bisnis1.id,
      },
      {
        practiceType: "Pewarna Alami",
        practiceDescription: "Menggunakan pewarna dari tumbuhan (daun indigo, kulit kayu).",
        isVerified: true,
        scoreWeight: 20,
        businessId: bisnis2.id,
      },
    ],
  });

  console.log("✅ Dummy data berhasil dimasukkan!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
