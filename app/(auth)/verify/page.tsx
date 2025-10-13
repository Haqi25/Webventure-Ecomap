'use client';
import { useState, FC, ChangeEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AuthLayout from '../components/AuthLayout';
import Image from 'next/image'
const VerifyPage : FC = () =>{
      const router = useRouter()

      const [message, setMessage] = useState("Memverifikasi Akun...")
 useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const token = params.get('token')

    if(!token){
        setMessage('Token Tidak Ditemukan')
        return;
    }
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/verifyemail?token=${token}`)
    .then(async (res) => {
        const data = await res.json();
        if(res.ok){
            setMessage('Akun Behasil Diverifikasi Anda Dapat Login Sekarang')
        } else {
            setMessage(data.error || 'Verifikasi Gagal')
        }

    })
    .catch(() => setMessage('Terjadi kesalahan pada server.'));
 }, [])

    return (
        <AuthLayout
         title="Daftar Berhasil"
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



export default VerifyPage