import Image from "next/image";

export default function BisnisUnggulan() {
  const bisnisList = [
    {
      nama: "Kedai kopi susu cita rasa khas Indonesia",
      lokasi: "Jakarta Pusat",
      kategori: "Kuliner",
      rating: 4.9,
      ulasan: "12 rb ulasan",
      tag: "Eco Friendly",
      img: "/unggulan1.png", // ganti dengan path gambar kamu
      deskripsi: "Kopi tradisional Indonesia dengan biji kopi organik dari petani lokal",
    },
    {
      nama: "Nusantara Batik Lokal Original",
      lokasi: "Bali",
      kategori: "Kerajinan",
      rating: 4.9,
      ulasan: "12 rb ulasan",
      tag: "Eco Friendly",
      img: "/unggulan2.png",
      deskripsi: "Pakaian batik tradisional buatan tangan menggunakan pewarna alami",
    },
    {
      nama: "Toko Buah Segar berkualitas",
      lokasi: "Bandung",
      kategori: "Pertanian",
      rating: 4.9,
      ulasan: "12 rb ulasan",
      tag: "Eco Friendly",
      img: "/unggulan3.png",
      deskripsi: "Buah organik segar langsung dari petani lokal berkualitas dan sehat",
    },
  ];

  return (
    <main className="bg-green-50 py-16 mt-12">

      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-900">
          Bisnis Lokal Unggulan
        </h1>
        <p className="text-green-600 pt-4 text-sm sm:text-base">
          Temukan bisnis UMKM luar biasa yang unggul dalam keberlanjutan, dampak komunitas, <br />
          dan produk atau layanan berkualitas.
        </p>
      </div>

   
      <div className="flex flex-col sm:flex-row justify-center gap-8 px-6">
        {bisnisList.map((bisnis, index) => (
          <div
            key={index}
            className="bg-white border border-green-200 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-[320px] overflow-hidden flex flex-col"
          >
        
            <div className="relative w-full h-48">
              <Image
                src={bisnis.img}
                alt={bisnis.nama}
                layout="fill"
                objectFit="cover"
                className="rounded-t-3xl"
              />
            </div>

        
            <div className="p-5 flex flex-col justify-between flex-grow">
              <h3 className="font-semibold text-green-900 text-lg truncate">
                {bisnis.nama}
              </h3>

              <p className="text-gray-500 text-sm mt-1">📍 {bisnis.lokasi}</p>

              <div className="flex items-center gap-2 mt-2">
                <span className="text-yellow-500 text-sm">⭐ {bisnis.rating}</span>
                <span className="text-gray-500 text-sm">({bisnis.ulasan})</span>
                <span className="ml-auto bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
                  {bisnis.tag}
                </span>
              </div>

              <p className="text-gray-600 text-sm mt-3">{bisnis.deskripsi}</p>

           
              <div className="flex items-center justify-between mt-5 border-t pt-3">
                <span className="border border-green-500 text-green-700 rounded-full px-4 py-1 text-sm font-medium">
                  {bisnis.kategori}
                </span>
                <button className="bg-green-500 hover:bg-green-600 text-white rounded-full px-4 py-1 text-sm font-medium">
                  Kunjungi
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 mt-12">
  <hr className="w-1/4 border-t-2 border-gray-300" />
  
  <button className="bg-green-500 hover:bg-green-600 text-white font-semibold text-lg rounded-full px-10 py-3 shadow-md">
    Explore More
  </button>
  
  <hr className="w-1/4 border-t-2 border-gray-300" />
</div>

    </main>
  );
}
