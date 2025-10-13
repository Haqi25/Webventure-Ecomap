'use client';
import { useState, FC, ChangeEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import AuthLayout from '../components/AuthLayout';
import InputField from '../components/InputField';
import { LoginFormData } from '../../../types/auth.types';
import Script from 'next/script';
import swal from 'sweetalert2';

const LoginPage: FC = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
   const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
    remember: false
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (): Promise<void> => {
    if (!formData.email || !formData.password) {
    swal.fire({
  icon: "error",
  title: "Error Nih",
  text: "Password dan email wajib diisi ya",

});
      return;
    }

    setLoading(true);
    try {
    // API
     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`,{
      method : 'POST',
      headers : {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email:formData.email,
        password:formData.password,
      })
     })
      
      const data = await res.json().catch(() => ({}));

     if(!res.ok){
     swal.fire({
     icon: "error",
     title: "Error Nih",
     text:  data.message || "Password Atau Email Kamu Salah ya",

});

return
     }

     
   swal.fire({
      icon: "success",
      title: "Berhasil!",
      text: data.message || "Kode OTP dikirim Ke Emailmu",
   
});
    router.push(`/otp-verification?email=${encodeURIComponent(formData.email)}`);
   
    } catch (error) {
      console.error('Login error:', error);
      alert('Login gagal. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };


 const GoogleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google-login`;
 
  };


  return (
    <AuthLayout
      title="Selamat Datang di Media UMKM"
      subtitle="Silahkan login dengan akun anda"
      
    >
      
      
      <div className="space-y-4">
        <InputField
          label="Email"
          type="email"
          placeholder="example@gmail.com"
          icon={AiOutlineMail}
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <InputField
          label="Password"
          type="password"
          placeholder="Masukan password kamu"
          icon={AiOutlineLock}
          showToggle
          isPasswordVisible={showPassword}
          onToggle={() => setShowPassword(!showPassword)}
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
 <Script
        src="https://accounts.google.com/gsi/client"
        strategy="afterInteractive"
      />
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 text-xs sm:text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
              className="w-4 h-4 accent-green-500 rounded"
            />
            <span className="text-gray-600">Simpan sesi saya</span>
          </label>
          <Link href="/request-reset" className="text-green-600 hover:text-green-700 font-medium">
            Forgot Password?
          </Link>
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-green-500 hover:bg-green-600 active:bg-green-700 disabled:bg-gray-400 text-white font-bold py-2.5 sm:py-3 rounded-full transition duration-200 cursor-pointer"
        >
          {loading ? 'Loading...' : 'Login'}
        </button>

        <div className="relative my-5 sm:my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-xs sm:text-sm">
            <span className="px-2 bg-white text-gray-500">or continue with</span>
          </div>
        </div>
  <div className="flex justify-center">
          <div className="flex flex-col items-center mt-10 w-full">

      <button
        onClick={GoogleLogin}
        className="w-full flex cursor-pointer justify-center gap-2 border p-3 rounded-lg bg-white hover:bg-gray-100 shadow py-2.5 sm:py-3"
      >
        <img
          src="https://developers.google.com/identity/images/g-logo.png"
          alt="google"
          className="w-5 h-5"
        />
        <span className="text-green-700">Lanjutkan Dengan Google</span>
      </button>

    </div>
        </div>
        <p className="text-center text-xs sm:text-sm text-gray-600 mt-5 sm:mt-6">
          Belum punya akun?{' '}
          <Link
            href="/register"
            className="text-green-600 hover:text-green-700 font-medium"
          >
            Register disini
          </Link>
        </p>
      </div>

      {/* Footer */}
      <div className="mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-gray-200 flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-xs text-gray-500">
        <Link href="#" className="hover:text-gray-700">Disclaimer</Link>
        <span className="hidden sm:inline">•</span>
        <Link href="#" className="hover:text-gray-700">Privacy Policy</Link>
        <span className="hidden sm:inline">•</span>
        <Link href="#" className="hover:text-gray-700">Terms</Link>
        <div className="w-full sm:w-auto flex justify-center mt-2 sm:mt-0">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
            Login by Admin
          </span>
        </div>
      </div>
    </AuthLayout>
  );
};


export default LoginPage;