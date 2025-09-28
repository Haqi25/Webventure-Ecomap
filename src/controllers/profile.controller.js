import { userProfile } from "../services/profile.service.js";


export const profile = async (req, res) => {
    
    try {
     const userId = req.userId;
     const user = await userProfile(userId)

    res.json({message : "Heloo", user })
    } catch (error) {
        return res.status(500).json({ error : error.message})
    }
}