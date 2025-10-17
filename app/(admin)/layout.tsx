'use client';

import { useState, ReactNode, FC } from 'react';
import { usePathname } from 'next/navigation';
import Sidebar from './components/AdminLayout';
import Navbar from './components/Navbar';

interface AdminLayoutProps {
  children: ReactNode;
}


const AdminLayout: FC<AdminLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  
  
  const getActiveMenu = () => {
    if (pathname?.includes('/dashboard')) return 'dashboard';
    if (pathname?.includes('/users')) return 'users';
    if (pathname?.includes('/umkm')) return 'umkm';
    if (pathname?.includes('/category')) return 'category';
    if (pathname?.includes('/settings')) return 'settings';
    return 'dashboard';
  };

  const [activeMenu, setActiveMenu] = useState(getActiveMenu());

  return (
    <html lang='en'>
    <body className="bg-white min-h-screen">
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        {/* Content */}
        <div className="flex-1 overflow-auto p-4 sm:p-6">
          {children}
        </div>
      </div>
    </div>
    </body>
    </html>
    
  );
};

export default AdminLayout;