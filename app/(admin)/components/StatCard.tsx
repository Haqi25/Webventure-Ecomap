import {FC} from 'react'
import {StatCard} from '@/types/admin.types'
import { stat } from 'fs';
import {FiTrendingUp, FiShoppingBag } from  'react-icons/fi'


interface StatCardComponentProps {
    stat: StatCard;
}


export const StatCardComponent : FC<StatCardComponentProps> = ({stat}) => {
    const Icon = stat.icon
    return (
      <div className={`${stat.bgColor} rounded-lg p-6 border border-gray-200`}>
         <div className="flex items-center justify-between">
            <div>
                <p className="text-gray-600 text-sm mb-2">{stat.label}</p>
               <p className="text-3xl font-bold text-gray-900 whitespace-pre-line">
            {stat.value}
          </p>
             
            </div>
            <div className={`${stat.iconBgColor} p-3  mb-8 rounded-lg text-white`}>
             <Icon size={16}/>
            </div>
         </div>
      </div>
    )
}

export default StatCardComponent;