"use client"; // <-- WAJIB tambahkan ini

import { ReactNode } from 'react';
import Script from 'next/script';
import { GoogleOAuthProvider } from "@react-oauth/google";


interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {

  return (
    <html lang="en">
      <body className="bg-white min-h-screen">

        {/* Load Google SDK */}
        <Script
          src="https://accounts.google.com/gsi/client"
          strategy="afterInteractive"
          onLoad={() => console.log("✅ Google SDK Loaded")}
        />

        {/* Wrap auth pages with GoogleOAuthProvider */}
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
          <main>{children}</main>
        </GoogleOAuthProvider>

      </body>
    </html>
  );
}
