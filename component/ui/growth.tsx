import { Leaf, Users } from "lucide-react";

export default function Growth() {
  return (
    <section id="growth">
      <div className="w-full min-h-screen bg-white flex flex-col items-center px-6">
        {/* Title */}
        <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold">Berkembangan yang dimaksud</h1> 
        <p className="text-center text-[16px] text-green-500 pt-6">Mendukung bisnis lokal yang berkelanjutan menjadi mudah dengan platform pemetaan interaktif kami. Ikuti empat langkah mudah ini untuk memberikan dampak positif bagi komunitas Anda. </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-16">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-[0_0_20px_-5px_rgba(34,197,94,0.3)] p-8 w-72 py-18 text-center hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-green-50 p-4 rounded-full">
                <Leaf className="w-8 h-8 text-green-500" />
              </div>
            </div>
            <h3 className="font-semibold text-green-900 mb-2">Praktik Ramah Lingkungan</h3>
            <p className="text-sm text-gray-600">
              Bisnis yang menggunakan bahan dan proses berkelanjutan.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl py-16 shadow-[0_0_20px_-5px_rgba(34,197,94,0.3)] p-8 w-72 text-center hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-green-50 p-4 rounded-full">
                <Users className="w-8 h-8 text-green-500" />
              </div>
            </div>
            <h3 className="font-semibold text-green-900 mb-2">Pekerja Lokal</h3>
            <p className="text-sm text-gray-600">
              Mendukung bisnis yang mempekerjakan anggota masyarakat, komunitas.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-green-500 text-sm sm:text-base mb-4">
            Bergabunglah dengan ribuan konsumen sadar yang mendukung bisnis lokal yang berkelanjutan
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-300">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </section>
  );
}
