import { approval } from "../services/approval.sustainabilitypractice.js";

export const approvedPractice = async (req, res) => {
    try {
        const {id} = req.params
        const {isVerified, scoreWeight} = req.body

        const practice = await approval({
            id,
            isVerified,
            scoreWeight
        })

        res.json({message : "Telah Disetujui", practice})
    } catch (error) {
        return res.status(500).json({error : error.message})
    }
}

