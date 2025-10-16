import { MapPin, Search, User } from "lucide-react"

export default function TeknologiWebgis() {
  return (

    <div className="flex flex-col items-center justify-start min-h-screen bg-green-50 pt-12 my-24">
      <div className="p-6 bg-white rounded-2xl shadow-[0_0_25px_-5px_rgba(34,197,94,0.3)]">
        <MapPin className="w-10 h-10 text-green-500" />
      </div>

      <h1 className="text-4xl font-bold pt-8 text-center">Didukung oleh Teknologi WebGIS Canggih</h1>
      <p className="text-green-400 text-center pt-4 text-md">Sistem pemetaan interaktif kami menyediakan data lokasi real-time, metrik <br /> keberlanjutan, dan informasi bisnis terperinci, semuanya dalam satu platform intuitif. <br /> Temukan bisnis lokal yang belum pernah ada sebelumnya.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-15 px-8">
        {/* card 1 */}
        <div className="flex bg-white flex-col items-center text-center  rounded-2xl p-8  border-green-200 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 w-full  overflow-hidden flex flex-col">
          <div className="bg-green-100 rounded-full p-4 mb-4">
            <MapPin className="w-10 h-10 text-green-500" />
          </div>
          <h3 className="font-semibold text-lg text-green-900 mb-2">Menemukan</h3>
          <p className="text-gray-600">
            Gunakan peta interaktif dan filter pencarian kami untuk menemukan bisnis
            lokal berdasarkan kategori, lokasi, dan skor keberlanjutan.
          </p>
        </div>


        <div className="flex bg-white flex-col items-center text-center  rounded-2xl p-8  border-green-200 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 w-full  overflow-hidden flex flex-col">
          <div className="bg-green-100 rounded-full p-4 mb-4">
            <Search className="w-10 h-10 text-green-500" />
          </div>
          <h3 className="font-semibold text-lg text-green-900 mb-2">Menemukan</h3>
          <p className="text-gray-600">
            Gunakan peta interaktif dan filter pencarian kami untuk menemukan bisnis
            lokal berdasarkan kategori, lokasi, dan skor keberlanjutan.
          </p>
        </div>



        <div className="flex bg-white flex-col items-center text-center  rounded-2xl p-8  border-green-200 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 w-full  overflow-hidden flex flex-col">
          <div className="bg-green-100 rounded-full p-4 mb-4">
            <User className="w-10 h-10 text-green-500" />
          </div>
          <h3 className="font-semibold text-lg text-green-900 mb-2">Menemukan</h3>
          <p className="text-gray-600">
            Gunakan peta interaktif dan filter pencarian kami untuk menemukan bisnis
            lokal berdasarkan kategori, lokasi, dan skor keberlanjutan.
          </p>
        </div>
      </div>

    </div>

  )
}