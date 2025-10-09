import GrowthBar from "./growthbar"
import MapComponent from "./map"
import DropdownCategory from "./dropdown_category"
import DropdownCity from "../dropdown_city"
import Image from "next/image"

export default function SearchPage() {
    return (
        <section id="search" className="h-screen flex flex-col items-center pt-20">
            {/* Container utama */}
            <div className="w-[90%] flex flex-row items-start border border-gray-200 rounded-[60px] p-6">

                {/* Kiri: Search, GrowthBar, Map */}
                <div className="w-[75%]">
                    {/* Search bar */}
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Cari bisnis, produk, atau layanan..."
                            className="w-full h-12 pl-10 pr-24 border border-gray-300 rounded-full focus:outline-none"
                        />
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 text-white px-12 h-9 rounded-full hover:bg-green-600">
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
                <div className="w-[25%] flex flex-col gap-6 items-center justify-center">

                    {/* Dropdowns */}
                    <div className="flex flex-col w-full gap-3 items-center">
                        <DropdownCity />

                    </div>

                    {/* Indikator Growth */}
                    <div className="flex flex-col items-center justify-center gap-3 mt-12">
                        <div className="flex items-center gap-2 ">
                            <div className="w-4 h-4 rounded-full bg-green-700"></div>
                            <span className="text-green-900 font-medium">90–100% Growth</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-green-400"></div>
                            <span className="text-green-900 font-medium">80–90% Growth</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                            <span className="text-green-900 font-medium">70–80% Growth</span>
                        </div>
                    </div>

                    {/* Kotak info */}
                    <div className="border border-gray-300 rounded-2xl px-6 py-3 mt-4 text-center">
                        <p className="text-gray-400 text-sm">Menampilkan</p>
                        <h3 className="text-2xl font-bold text-green-900">20</h3>
                        <p className="text-green-900 font-semibold">Bisnis Umkm</p>
                    </div>
                </div>
                <div className="items-start w-[15%]">
                    <DropdownCategory />
                </div>
            </div>

            {/* Gambar Daun */}
            <div className="flex flex-row items-center justify-center mt-4">
                <Image src="/leaf.png" alt="gambar daun" width={60} height={60} />
            </div>
        </section>
    )
}
