'use client';
import { useState, FC, ChangeEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AuthLayout from '../components/AuthLayout';
import { AiOutlineMail, AiOutlineLock, AiFillPhone, AiOutlineUser } from 'react-icons/ai';
import InputField from '../components/InputField';
import { RegisterFormData } from '@/types/auth.types';
import Link from 'next/link';
import swal from 'sweetalert2';



const RegisterPage : FC = () => {
         const router = useRouter();
         const [showPassword, setShowPassword] = useState<boolean>(false)
         const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)
         const [loading, setLoading] = useState<boolean>(false)
         const [formData, setFormData] = useState<RegisterFormData>({
          fullName: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: '',
          agree: false
         })
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {

    const { name, value, checked, type} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type ==='checkbox' ? checked : value
    }))
}

 const validateForm = (): boolean => {
    if (!formData.fullName.trim()) {
      swal.fire({
        icon : "warning",
        title : "Ada Yang Kurang",
        text : "Nama Lengkap Harus Diisi"
      });
      return false;
    }

    if (!formData.email.trim()) {
      swal.fire({
        icon : "warning",
        title : "Ada Yang Kurang",
        text : "Email Harus Diisi"
      });
      return false;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      
      swal.fire({
        icon : "warning",
        title : "Ada Yang Kurang",
        text : "Email Tidak Valid"
      });
      return false
    }

    if(!formData.phone.trim()){
       swal.fire({
        icon : "warning",
        title : "Ada Yang Kurang",
        text : "Nomor Telepon Harus diisi"
      });
      return false;
    }

    if (!formData.password) {
      swal.fire({
        icon : "warning",
        title : "Ada Yang Kurang",
        text : "Password Harus Diisi"
      });
      return false;
    }

    if (formData.password.length < 6) {
       swal.fire({
        icon : "warning",
        title : "Ada Yang Kurang",
        text : "Password Minimal 6 Karakter"
      });
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
     swal.fire({
        icon : "warning",
        title : "Ada Yang Kurang",
        text : "Password Tidak Cocok"
      });
      return false;
    }

    if (!formData.agree) {
       swal.fire({
        icon : "warning",
        title : "Ada Yang Kurang",
        text : "Anda Harus Setuju dengan Term & Condition"
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async(): Promise<void> => {
    if(!validateForm()){
      return;
    }

    setLoading(true);
    //API Consume
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`,{
          method: 'POST',
          headers: {'Content-Type' : 'application/json'},
          body : JSON.stringify({
            fullName : formData.fullName,
            email : formData.email,
            phone : formData.phone,
            password : formData.password,
            confirmPassword : formData.confirmPassword
          
          })
        } )

  const data = await res.json().catch(() => ({}));
console.log('Response data:', data)
  if (!res.ok) {
  if (data.error?.includes('Email')) {
  swal.fire({
    icon : "error",
    title : "Gagal",
    text: "Email Telah Digunakan"
  })
  } else if (data.error?.includes('Phone')) {
  swal.fire({
    icon : "error",
    title: "Gagal",
    text: "Nomor Telepon Sudah Terdaftar"
  })
  } else {
  swal.fire({
    icon : "error",
    title: "Gagal",
    text: "Terjadi Kesalahan Saat Registrasi"
  })
  }
  return;
}
   swal.fire({
         icon: "success",
         title: "Berhasil!",
         text: data.message || swal.fire({
               icon: "success",
               title: "Berhasil!",
               text: data.message || 'Registrasi berhasil! Silakan cek emailmu'
            
         })
      
   });
        
     } catch (error: any) {
    console.error("Register error:", error);
    swal.fire({
      icon : "error",
      title: "Gagal",
      text : error.message || "Terjadi Kesalahan Silahkan coba lagi nanti"
    })
  } finally {
    setLoading(false);
  }

  }

  return (
        <AuthLayout
                title="Selamat Datang Di media UMKM"
                subtitle="Silahkan Daftar Akun Terlebih dahulu"

         >
               <div className="mt-[-20px]">
        <InputField
              label="Nama Lengkap"
              type="string"
             placeholder="Masukkan Nama lengkap Anda"
             name="fullName"
             icon={AiOutlineUser}
             value={formData.fullName}
             onChange={handleChange}
             required
        >
        </InputField>
          <InputField
              label="Email"
              type="email"
             placeholder="example@gmail.com"
             name="email"
             icon={AiOutlineMail}
             value={formData.email}
             onChange={handleChange}
             required
        >
        </InputField>
          <InputField
              label="Nomor Telepon"
              type="string"
             placeholder="Masukkan Nomor Telepon Anda"
             name="phone"
             icon={AiFillPhone}
             value={formData.phone}
             onChange={handleChange}
             required
        >
        </InputField>
          <InputField
              label="Password"
              type="password"
             placeholder="Masukkan Password"
             name="password"
              icon={AiOutlineLock}
              showToggle
              isPasswordVisible={showPassword}
              onToggle={() => setShowPassword(!showPassword)}
             value={formData.password}
             onChange={handleChange}
             required
        >
        </InputField>
          <InputField
              label="Konfirmasi Password"
              type="password"
             placeholder="Masukkan Konfirmasi Password"
             name="confirmPassword"
              icon={AiOutlineLock}
             value={formData.confirmPassword}
              showToggle
              isPasswordVisible={showPassword}
              onToggle={() => setShowPassword(!showPassword)}
             onChange={handleChange}
             required
        >
        </InputField>
                </div>
            
        <label className='flex items-start gap-2 cursor-pointer mb-2'>
         <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="w-4 h-4 accent-green-600 rounded mt-1 flex-shrink-0"
         />
         <span className="text-gray-600 text-xs sm:text-sm">
            Saya setuju dengan{' '}
            <Link href="#" className="text-green-600 hover:text-green-700">
              Terms & Conditions
            </Link>
          </span>     
        </label>
   <button className=" cursor-pointer w-full bg-green-500 hover:bg-green-600 active:bg-green-700 disabled:bg-gray-400 text-white font-bold py-2.5 sm:py-3 rounded-full transition duration-200"
             onClick={handleSubmit}
          disabled={loading}
          >
          Daftar
        </button>
        <div>
     <p className="text-center text-xs sm:text-sm text-gray-600 mt-5 sm:mt-6">
          Sudah punya akun?{' '}
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

export default RegisterPage;