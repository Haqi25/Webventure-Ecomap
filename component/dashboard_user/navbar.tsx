"use client";
import { Search, SlidersHorizontal, MessageCircle, Bell, Store } from "lucide-react";
import Image from "next/image";

export default function SearchBar() {
  return (
    <div className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-sm rounded-full">
      {/* Input Pencarian */}
      <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-[60%]">
        <Search className="text-gray-400 mr-2" size={20} />
        <input
          type="text"
          placeholder="Cari bisnis, produk, atau layanan..."
          className="w-full outline-none text-sm text-gray-600"
        />
        <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-1 rounded-full ml-3">
          Cari
        </button>
      </div>

      {/* Ikon kanan */}
      <div className="flex items-center gap-6">
        <SlidersHorizontal className="cursor-pointer" size={20} />
        <div className="relative">
          <MessageCircle className="cursor-pointer" size={22} />
          <span className="absolute -top-2 -right-3 bg-green-600 text-white text-[10px] font-semibold px-1.5 rounded-full">
            99+
          </span>
        </div>
        <Bell className="cursor-pointer" size={22} />
        <Store className="cursor-pointer" size={22} />

        {/* Profil User */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-green-900">Mas Rizal</p>
            <p className="text-xs text-gray-500">📍 Malang kota</p>
          </div>
          <Image
            src="/profil.png" // ganti dengan gambar kamu
            alt="User"
            width={36}
            height={36}
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
