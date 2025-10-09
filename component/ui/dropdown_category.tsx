"use client";
import { useState } from "react";

export default function DropdownCategory() {
  // state buat nyimpan pilihan dan buka/tutup dropdown
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("All Kategori");

  return (
    <div className="relative inline-block">
      {/* Tombol utama */}
      <button
        onClick={() => setIsOpen(!isOpen)} // klik untuk buka/tutup
        className="text-black border border-gray-300 rounded-[80px] px-4 py-2 px-6"
      >
        {selected}
      </button>

      {/* Isi dropdown (muncul kalau isOpen = true) */}
      {isOpen && (
        <div className="absolute mt-2 w-40 bg-white border border-gray-500 rounded-md shadow">
          <button
            onClick={() => {
              setSelected("UMKM Makanan");
              setIsOpen(false);
            }}
            className="block w-full text-left px-4 py-4 hover:bg-green-100"
          >
            UMKM Makanan
          </button>
          <button
            onClick={() => {
              setSelected("UMKM Fashion");
              setIsOpen(false);
            }}
            className="block w-full text-left px-4 py-2 hover:bg-green-100"
          >
            UMKM Fashion
          </button>
          <button
            onClick={() => {
              setSelected("UMKM Teknologi");
              setIsOpen(false);
            }}
            className="block w-full text-left px-4 py-2 hover:bg-green-100"
          >
            UMKM Teknologi
          </button>
        </div>
      )}
    </div>
  );
}
