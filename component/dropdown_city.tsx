"use client";
import { use, useState } from "react";
export default function DropdownCity() {
    // state menyimpan data
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("Indonesia");

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
                  setSelected("Jakarta");
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-4 hover:bg-green-100"
              >
                Jakarta
              </button>
              <button
                onClick={() => {
                  setSelected("Surabaya");
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-green-100"
              >
                Surabaya
              </button>
              <button
                onClick={() => {
                  setSelected("Malang");
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-green-100"
              >
                Malang
              </button>
            </div>
          )}
        </div>
      );
    }
    