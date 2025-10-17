import { FiTrendingUp } from "react-icons/fi";

import  {FC} from 'react'
import { mockChartData } from "../lib/mockdata";
import { BarChart, ResponsiveContainer, XAxis, CartesianGrid, YAxis, Tooltip, Bar } from "recharts";
const ChartComponent = () => {

    const data = mockChartData
    return (
         <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-6">
                         <div className="flex items-center gap-2 mb-4">
                           <FiTrendingUp className="text-green-500" size={20} />
                           <h3 className="text-lg font-bold text-gray-900">
                             Pertumbuhan UMKM Berkelanjutan
                           </h3>
                         </div>
                         <ResponsiveContainer width="100%" height={300}>
                           <BarChart data={mockChartData}>
                             <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                             <XAxis dataKey="month" stroke="#9ca3af" />
                             <YAxis stroke="#9ca3af" />
                             <Tooltip
                               contentStyle={{
                                 backgroundColor: '#fff',
                                 border: '1px solid #e5e7eb',
                                 borderRadius: '8px'
                               }}
                             />
                             <Bar dataKey="users" fill="#10b981" radius={[8, 8, 0, 0]} />
                           </BarChart>
                         </ResponsiveContainer>
                       </div>
    )
}


export default ChartComponent