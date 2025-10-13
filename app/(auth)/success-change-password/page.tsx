'use client';
import { useState, FC, ChangeEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AuthLayout from '../components/AuthLayout';
import Image from 'next/image'
const SuccessPage : FC = () =>{
      const router = useRouter()

     

    return (
        <AuthLayout
         title="Password Berhasil Diubah"
         subtitle=""
         
        >
            <div className="flex justify-center mb-4">
                <Image
                  src="/ceklis.png"
                  alt="Gambar ceklis"

                  width={245}
                  height={245}
                />
            </div>
       
            <button
            onClick={() => router.push('/login')}
         className="w-full bg-green-500 hover:bg-green-600 active:bg-green-700 disabled:bg-gray-400 text-white font-bold py-2.5 sm:py-3 rounded-full transition duration-200 cursor-pointer"  
                >
                    Silahkan Login
                    
            </button>
          

        </AuthLayout>
    )
}



export default SuccessPage