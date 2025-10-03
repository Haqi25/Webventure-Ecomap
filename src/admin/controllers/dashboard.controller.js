import { getDataDashboard } from "../../services/admin/dashboard.services.js";



export const adminDashboard = async (req, res) => {
    try {
        
        const dashboard = await getDataDashboard()


        res.json({
            dashboard
            
        })

      
    } catch (error) {
        return res.status(500).json({ error : error.message})
    }
}