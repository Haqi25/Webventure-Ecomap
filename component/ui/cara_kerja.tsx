import { Search, Users, MapPin, Heart } from "lucide-react";

export default function CaraKerja() {
  return (
    <main className="bg-white py-20">
      {/* Judul dan deskripsi */}
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800">
          Cara Kerja Platform Website Kami
        </h1>
        <p className="pt-4 text-green-500 max-w-3xl">
          Mendukung bisnis lokal yang berkelanjutan menjadi mudah dengan platform
          pemetaan interaktif kami. Ikuti empat langkah mudah ini untuk memberikan
          dampak positif bagi komunitas Anda.
        </p>
      </div>

      {/* Empat langkah */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 px-8 md:px-20">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center border border-green-300 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
          <div className="bg-green-100 rounded-full p-4 mb-4">
            <Search className="text-green-600 w-8 h-8" />
          </div>
          <h3 className="font-semibold text-lg text-green-900 mb-2">Menemukan</h3>
          <p className="text-gray-600">
            Gunakan peta interaktif dan filter pencarian kami untuk menemukan bisnis
            lokal berdasarkan kategori, lokasi, dan skor keberlanjutan.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center border border-green-300 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
          <div className="bg-green-100 rounded-full p-4 mb-4">
            <Users className="text-green-600 w-8 h-8" />
          </div>
          <h3 className="font-semibold text-lg text-green-900 mb-2">Mengeksplorasi</h3>
          <p className="text-gray-600">
            Telusuri profil bisnis terperinci, peringkat, dan praktik keberlanjutan
            di platform WebGIS kami.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center border border-green-300 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
          <div className="bg-green-100 rounded-full p-4 mb-4">
            <MapPin className="text-green-600 w-8 h-8" />
          </div>
          <h3 className="font-semibold text-lg text-green-900 mb-2">Menghubungkan</h3>
          <p className="text-gray-600">
            Kunjungi bisnis secara langsung melalui peta atau dapatkan petunjuk arah
            untuk mendukung komunitas lokal Anda.
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center text-center border border-green-300 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
          <div className="bg-green-100 rounded-full p-4 mb-4">
            <Heart className="text-green-600 w-8 h-8" />
          </div>
          <h3 className="font-semibold text-lg text-green-900 mb-2">Mendukung</h3>
          <p className="text-gray-600">
            Tinggalkan ulasan dan bantu konsumen sadar lainnya menemukan bisnis lokal
            yang berkelanjutan.
          </p>
        </div>
      </div>
    </main>
  );
}
