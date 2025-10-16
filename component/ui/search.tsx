import GrowthBar from "./growthbar"
import MapComponent from "./map"
import DropdownCategory from "./dropdown_category"
import DropdownCity from "../dropdown_city"
import Image from "next/image"

export default function SearchPage() {
    return (
        <section id="search" className="min-h-screen flex flex-col items-center pt-20">
            {/* Container utama */}
            <div className="w-[90%] flex flex-col lg:flex-row items-start border border-gray-200 rounded-[40px] p-4 lg:p-6 gap-6">
                
                {/* Kiri: Search, GrowthBar, Map */}
                <div className="w-full lg:w-[70%]">
                    {/* Search bar */}
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Cari bisnis.."
                            className="w-full h-12 pl-10 pr-24 border border-gray-300 rounded-full focus:outline-none text-sm sm:text-base"
                        />
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 text-white px-6 sm:px-10 h-9 rounded-full hover:bg-green-600 text-sm sm:text-base">
                            Search
                        </button>
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">🔍</span>
                    </div>

                    {/* Growth Bar */}
                    <div className="pt-6">
                        <GrowthBar label="Growth" value={90} />
                    </div>

                    {/* Peta */}
                    <div className="pt-6">
                        <MapComponent />
                    </div>
                </div>

                {/* Kanan: Filter & Info */}
                <div className="w-full lg:w-[25%] flex flex-col gap-6 items-center justify-center">
                    {/* Dropdowns */}
                    <div className="flex flex-col w-full gap-3 items-center">
                        <DropdownCity />
                    </div>

                    {/* Indikator Growth */}
                    <div className="flex items-center justify-center mt-10 lg:mt-20">
                        <div className="flex flex-col items-start justify-center gap-3">
                            {[
                                { color: "bg-green-700", text: "90–100% Growth" },
                                { color: "bg-green-400", text: "80–90% Growth" },
                                { color: "bg-yellow-400", text: "70–80% Growth" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 pt-2 sm:pt-4">
                                    <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                                    <span className="text-green-900 font-medium text-sm sm:text-base">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Kotak info */}
                    <div className="border border-gray-300 rounded-2xl px-6 py-3 mt-6 lg:mt-8 text-center">
                        <p className="text-gray-400 text-sm">Menampilkan</p>
                        <h3 className="text-2xl font-bold text-green-900">20</h3>
                        <p className="text-green-900 font-semibold">Bisnis UMKM</p>
                    </div>
                </div>

                {/* Kategori (pindah ke bawah di mobile) */}
                <div className="w-full lg:w-[15%]">
                    <DropdownCategory />
                </div>
            </div>

            {/* Gambar Daun (statistik bawah) */}
            <div className="flex flex-col sm:flex-row items-center justify-center mt-10 lg:mt-20 gap-6">
                {[
                    { img: "/leaf.png", label: "UMKM Growth" },
                    { img: "/statistik.png", label: "UMKM Growth" },
                    { img: "/person.png", label: "UMKM Growth" },
                ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                        <Image src={item.img} alt={item.label} width={50} height={50} />
                        <p className="font-bold text-green-500 mt-2">1800</p>
                        <p>{item.label}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
