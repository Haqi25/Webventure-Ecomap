export default function About() {
    return (
        <section id="about" className="w-full py-16 px-6 md:px-20 bg-white">
            {/* Statistik */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12">
                <div>
                    <h3 className="text-2xl font-semibold text-green-600">4.9/5</h3>
                    <p className="text-sm text-gray-600">Peringkat Rata - Rata</p>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-green-600">10.000+</h3>
                    <p className="text-sm text-gray-600">Pelanggan Puas</p>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-green-600">500+</h3>
                    <p className="text-sm text-gray-600">Bisnis Mitra</p>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-green-600">50+</h3>
                    <p className="text-sm text-gray-600">Kota yang Tercakup</p>
                </div>
            </div>

            {/* Konten utama */}
            <div className="flex flex-col md:flex-row items-center gap-10">
                {/* Teks kiri */}
                <div className="md:w-1/2 space-y-5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-green-500 text-2xl">🍃</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">About us</h2>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                        <strong>Media UMKM</strong> adalah platform WebGIS interaktif yang
                        bertujuan untuk mencari, mempromosikan serta mempermudah Usaha
                        Mikro, Kecil, dan Menengah (UMKM) lokal yang sedang berkembang.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        Kami ingin memudahkan Anda menemukan, terhubung, dan memberikan
                        dukungan langsung kepada wirausaha lokal di daerah Anda yang
                        menciptakan dampak positif. Kami menjembatani para pendukung dengan
                        bisnis lokal yang layak untuk didukung.
                    </p>

                    <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-full transition-all">
                        Daftar
                    </button>
                </div>

              {/* Gambar kanan */}
<div className="md:w-1/2 flex flex-col items-end gap-4">
  <div className="rounded-3xl overflow-hidden w-full lg:w-[80%]">
    <img
      src="/lp_1.png"
      alt="Pasar UMKM"
      className="w-full h-40 object-cover"
    />
  </div>

  <div className="rounded-3xl overflow-hidden lg:w-[90%]">
    <img
      src="/lp_2.png"
      alt="Petani di Ladang"
      className="w-full h-40 object-cover"
    />
  </div>

  <div className="rounded-3xl overflow-hidden w-full">
    <img
      src="/lp_3.png"
      alt="Peternakan Lokal"
      className="w-full h-40 object-cover"
    />
  </div>
</div>

            </div>
        </section>
    );
}
