import { calculateSustainabilityScore } from "../services/calculateSustainabilityScore.services.js";


export const averageSustainabilityScore = async (req, res) => {

    try {
        const {businessId} = req.params

        const averageScore = await calculateSustainabilityScore(
         { businessId}
        )

        res.json({averageScore})
    } catch (error) {  
        return res.status(500).json({error : error.message})
    }
}