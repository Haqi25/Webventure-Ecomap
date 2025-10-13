'use client';
import AuthLayout from "../components/AuthLayout";
import {FC, useRef, useState, useEffect} from 'react'
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import swal from 'sweetalert2'
interface OTPFormData {
  code: string[];
}


const OtpVerificationCode: FC = () => {

    const [error, setError]  = useState<String>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [timeLeft, setTimeLeft] = useState<number>(60)
    const searchParams = useSearchParams();
    const router = useRouter();
    const email = searchParams.get('email') || 'user@gmail.com';
    const InputRefs = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null)
    ]

    const [formData, setFormData] = useState<OTPFormData>({
        code : ['','','','','',''

          ] 
        })
    useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);


   const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // hanya angka

    const newCode = [...formData.code];
    newCode[index] = value.slice(-1);
    setFormData({ code: newCode });

    if (value && index < InputRefs.length - 1) {
      InputRefs[index + 1].current?.focus();
    }
  };

   const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !formData.code[index] && index > 0) {
      InputRefs[index - 1].current?.focus();
    }
  };

  const handleVerify = async() => {
    const otp = formData.code.join("");
  
    setError("");
    setLoading(true);

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/OtpVerify`,{
            method: 'POST',
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify({email, otp}),
            credentials: "include"

        })
        if(!formData.code){
     
        }

        const data = await res.json()
          if(otp.length < 6) {
        swal.fire({
        icon: "error",
        title: "Kode OTP salah",
        text: data.message || "Kode OTP harus 6 digit",
      });
      return;
    }
      if (!res.ok) {
      swal.fire({
        icon: "error",
        title: "Kode OTP salah",
        text: data.message || "Kode OTP tidak sesuai, silakan cek email kamu!",
      });
      return;
    }

       alert("OTP Berhasil Diverifikasi")
       router.push("/dashboard");
       
    } catch (err: any) {
        setError(err.message)
    }
    finally {
      setLoading(false);
  }
}

  const resendOtp = async() => {
    setError("");
    setTimeLeft(60)

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/resend-otp`, {
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body : JSON.stringify({email})
        })
           const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Gagal mengirim ulang OTP");

    swal.fire("Kode OTP baru telah dikirim ke email Anda");
    } catch (err) {
         console.error(err);
    }
  }
    return (
        <AuthLayout
           title="OTP Vefification"
           subtitle={`Masukkan kode OTP yang telah kami kirim ke\n${email}`}

        >
            <div className="space-y-6 mb-6">
                <div className="flex justify-center gap-3 sm:gap-4 ">
                {InputRefs.map((ref, index)=> (
                   <input
                   key={index}
                   ref={ref}
                   type="text"
                   inputMode="numeric"
                   maxLength={1}
                 onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
                   value={formData.code[index]}
                   className={`w-14 sm:w-16 h-14 sm:h-16 text-center text-2xl sm:text-3xl font-bold border-2 rounded-lg focus:outline-none transition ${
                error
                  ? 'border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500'
                  : 'border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500'
              }`}
              disabled={loading}
                 />
                )
                )}
                </div>

                {error &&(
                    <p className = "">
                            {error}
                    </p>
                )}
             
               
            </div>
          
               
            <div className="mb-6">
            <button
               onClick={handleVerify}
          disabled={loading}
            className="w-full bg-green-500 hover:bg-green-600 active:bg-green-700 disabled:bg-gray-400 cursor-pointer text-white font-bold py-2.5 sm:py-3 rounded-full transition duration-200 "
            >
   {loading ? "Memverifikasi..." : "Verifikasi OTP"}
            </button>
            </div>

            <div className="text-center">
                  <button
                    onClick={resendOtp}
          disabled={timeLeft > 0}
                  className="text-green-400 cursor-pointer hover:underline hover:text-green-600 pb-px"
                  >
                    Kirim Ulang Code OTP
                  </button>
                   <p className="text-gray-500 text-xs sm:text-sm">
              Kirim ulang dalam{' '}
              <span className="text-green-600 font-medium">{timeLeft}s</span>
            </p>

            <button className="pt-7 sm:text-sm select-text cursor-text">
                   Kembali ke 
                   <Link
                   href={"/login"}
                   >
                 <span className="ml-1 text-green-400 cursor-pointer hover:text-green-600 hover:underline">Login</span>
          </Link>
            </button>
            </div>

  <div className="mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-gray-200 flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-xs text-gray-500">
        <Link href="#" className="hover:text-gray-700">Disclaimer</Link>
        <span className="hidden sm:inline">•</span>
        <Link href="#" className="hover:text-gray-700">Privacy Policy</Link>
        <span className="hidden sm:inline">•</span>
        <Link href="#" className="hover:text-gray-700">Terms</Link>
      </div>
            
        </AuthLayout>
    )
  }


export default OtpVerificationCode;