'use client'
import {FC} from 'react'
import {FiMenu, FiChevronDown} from 'react-icons/fi'
interface NavbarProps {
    onMenuClick : () => void;
}

const Navbar:FC<NavbarProps> =({onMenuClick}) => {
     return (
        <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4 flex items-center  sticky w-full top-0 z-10">
          <button className="lg:hidden text-gray-600 hover:text-gray-900 "
           onClick={onMenuClick}
          >
                     <FiMenu size={24} />
          </button>
         <div className="hidden sm:block">
        <h2 className="text-xl font-bold text-gray-900">Dashboard Admin</h2>
        <p className="text-sm text-gray-500">Kelola dan pantau aktivitas Media Umkm</p>
      </div>

         <div className="flex items-center gap-2 cursor-pointer">
          <div className="absolute top-0 right-0 m-4 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold ">
            A
          </div>
          <FiChevronDown size={20} className="text-gray-600" />
        </div>
          
        </div>
     )
}

export default Navbar