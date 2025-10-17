import { Quote, Star } from "lucide-react";
import Image from "next/image";

export default function Komunitas() {
  return (
    <section id="testimoni" className="w-full bg-green-50 py-20 px-6">
      {/* Title Section */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="flex justify-center mb-6">
          <div className="bg-white p-4 rounded-full shadow-sm">
            <Quote className="w-6 h-6 text-green-600" />
          </div>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-900">
          Apa Kata Komunitas Kami
        </h1>
        <p className="text-green-500 mt-3 text-sm sm:text-base">
          Dengarkan dari pelanggan dan pemilik bisnis yang menjadi bagian dari
          komunitas bisnis lokal berkelanjutan kami.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-[0_0_20px_-5px_rgba(34,197,94,0.3)] p-8 w-full md:w-80 text-center hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center mb-4">
            <div className="bg-green-50 p-3 rounded-full">
              <Quote className="w-6 h-6 text-green-500" />
            </div>
          </div>
          <div className="flex justify-center mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-gray-700 text-sm mb-6">
            "Media UMKM membantu saya menemukan bisnis lokal yang luar biasa
            yang belum pernah saya ketahui sebelumnya. Skor keberlanjutannya
            sangat membantu!"
          </p>
          <div className="flex flex-col items-center">
            <Image
              src="/anime.png"
              alt="Sarah Chen"
              width={50}
              height={50}
              className="rounded-full mb-2"
            />
            <p className="font-semibold text-green-900">Sarah Chen</p>
            <p className="text-gray-400 text-sm">Jakarta</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-[0_0_20px_-5px_rgba(34,197,94,0.3)] p-8 w-full md:w-80 text-center hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center mb-4">
            <div className="bg-green-50 p-3 rounded-full">
              <Quote className="w-6 h-6 text-green-500" />
            </div>
          </div>
          <div className="flex justify-center mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-gray-700 text-sm mb-6">
            "Sebagai pemilik usaha kecil, platform ini telah menghubungkan saya
            dengan pelanggan yang benar-benar menghargai produk lokal dan
            berkelanjutan."
          </p>
          <div className="flex flex-col items-center">
            <Image
              src="/purabaya.png"
              alt="Purabaya"
              width={50}
              height={50}
              className="rounded-full mb-2"
            />
            <p className="font-semibold text-green-900">Purabaya</p>
            <p className="text-gray-400 text-sm">Yogyakarta</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-[0_0_20px_-5px_rgba(34,197,94,0.3)] p-8 w-full md:w-80 text-center hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center mb-4">
            <div className="bg-green-50 p-3 rounded-full">
              <Quote className="w-6 h-6 text-green-500" />
            </div>
          </div>
          <div className="flex justify-center mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-gray-700 text-sm mb-6">
            "Sebagai pemilik usaha kecil, platform ini telah menghubungkan saya
            dengan pelanggan yang benar-benar menghargai produk lokal dan
            berkelanjutan."
          </p>
          <div className="flex flex-col items-center">
            <Image
              src="/2.png"
              alt="Hinata"
              width={50}
              height={50}
              className="rounded-full mb-2"
            />
            <p className="font-semibold text-green-900">Hinata</p>
            <p className="text-gray-400 text-sm">Malang</p>
          </div>
        </div>
      </div>
    </section>
  );
}
