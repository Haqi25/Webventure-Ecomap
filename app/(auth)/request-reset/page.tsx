'use client';
import { useState, FC, ChangeEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AuthLayout from '../components/AuthLayout';
import Image from 'next/image'
import { RequestResetData } from '@/types/auth.types';
import InputField from '../components/InputField';
import { AiOutlineMail} from 'react-icons/ai';
const requestResetPassword : FC = () => {
    const [formData, setFormData] = useState<RequestResetData>({
        email : ''
    })
    const [loading, setLoading] = useState<boolean>(false);

const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
  const { name, value, type, checked } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: type === 'checkbox' ? checked : value,
  }));
};
    

const handleSubmit = async() : Promise<void> => {
      if(!formData.email){
        alert("Email Wajib Diisi")
        return;
      }

      setLoading(true)

      //API
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/requestreset`, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
              email : formData.email
            })
        })

        const data = await res.json().catch(() => ({}));
        console.log('Email', data)
        alert(data.message || "Silahkan Periksa Email Anda untuk Mengubah Password");
      }catch(error){
        console.error("Request Password Tidak Bisa Dikirim", error);
      }finally{
        setLoading(false)
      }


}

    return(
        <AuthLayout
            title="Lupa Password"
            subtitle="
Silahkan  masukan email yang terdaftar pada saat anda registrasi sebelumnya"
        >

            <div className='space-y-4'>
                 <InputField
                 label="Email"
                          type="email"
                          placeholder="example@gmail.com"
                          icon={AiOutlineMail}
                          name="email"
                          onChange={handleChange}
                          value={formData.email}
                          required
                  
             >
                 </InputField>

              <button
          onClick={handleSubmit}
         disabled={loading}
         className={`w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-full transition ${
         loading ? 'opacity-70 cursor-not-allowed' : ''
           }`}
        >
         {loading ? 'Mengirim...' : 'Kirim Link Reset'}
</button>
            </div>
 <div>
     <p className="text-center text-xs sm:text-sm text-gray-600 mt-5 sm:mt-6">
          Sudah Ingat Passwordnya?{' '}
          <Link
            href="/login"
            className="text-green-600 hover:text-green-700 font-medium"
          >
            Login disini
          </Link>
        </p>
        </div>
        </AuthLayout>
    )
}


export default requestResetPassword