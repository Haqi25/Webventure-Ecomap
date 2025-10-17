'use client';

import {FC, useState, useEffect} from 'react';
import { useSearchParams } from "next/navigation";
import ChartComponent from '../components/Chart';
import StatCardComponent from '../components/StatCard';
import { mockNewUMKMs } from '../lib/mockdata';
import { getDashboardCards } from '../lib/api';



const AdminDashboard : FC = (async) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)
  const [activeMenu, setActiveMenu ] = useState('dashboard')
   const [cards, setCards] = useState<any[]>([]); 

   const searchParams = useSearchParams();

  useEffect(() => {
   
    const tokenFromUrl = searchParams.get("token");
    if (tokenFromUrl) {
      localStorage.setItem("token", tokenFromUrl);

      window.history.replaceState({}, "", "/dashboard");
    }

    const token = localStorage.getItem("token");
    if (!token) return console.warn("Token tidak ditemukan");

    const fetchData = async () => {
      const data = await getDashboardCards(token);
      setCards(data);
    };
    fetchData();
  }, [searchParams]);
  return (
    <div className="flex h-screen bg-gray-50 ">
    
      <div className="flex-1 flex flex-col overflow-hidden">
     
        <div className="flex-1 overflow-auto px-4 sm:px-6 pt-0">
          {activeMenu == "dashboard" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {cards.map((stat, index) => (
                  <StatCardComponent key={index} stat={stat} />
                ))}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <ChartComponent></ChartComponent>
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    UMKM Terbaru
                  </h3>
                  <div className="space-y-3">
                    {mockNewUMKMs.map((umkm) => (
                      <div
                        key={umkm.id}
                        className="flex items-center gap-3 pb-3 border-b border-gray-100 last:border-0"
                      >
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                          {umkm.image}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            {umkm.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {umkm.category}
                          </p>
                        </div>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${umkm.statusColor}`}
                        >
                          {umkm.status}
                        </span>
                      </div>
                    ))}
                    <button className="w-full mt-4 py-2 text-center text-green-600 hover:text-green-700 font-medium text-sm border border-green-200 rounded-lg hover:bg-green-50 transition">
                      Lihat Semua UMKM
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );


}
export default AdminDashboard;

