import {FC, ReactNode} from 'react';
import Image from 'next/image'
interface AuthLayoutProps {
    children : ReactNode,
    title : string
    subtitle : string
}

const AuthLayout:FC<AuthLayoutProps> = ({children, title, subtitle}) => {
return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 py-8 lg:py-0 bg-white">
        <div className="w-full max-w-sm">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-1 sm:mb-2">
            {title}
          </h1>
          <p className="text-green-600 text-center text-xs sm:text-sm mb-6 sm:mb-8">
            {subtitle}
          </p>
          {children}
        </div>
      </div>

      {/* Right Side - Branding */}
      <div className="hidden lg:flex w-1/2 bg-green-500 items-center justify-center overflow-hidden relative">
        <div className="text-white text-center z-10">
          <div className="text-6xl sm:text-8xl lg:text-9xl mb-2 sm:mb-4">
            <Image 
                 src="/logoo.png"
                 alt="Picture of the author"
      width={284}
      height={284}
            />
          </div>
          <p className="text-lg sm:text-2xl font-semibold">Media UMKM</p>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout