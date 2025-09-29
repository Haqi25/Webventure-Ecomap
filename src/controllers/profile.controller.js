import { updateProfile, userProfile } from "../services/profile.service.js";


export const profile = async (req, res) => {
    
    try {
     const userId = req.userId;
     const user = await userProfile(userId)

    res.json({message : "Heloo", user })
    } catch (error) {
        return res.status(500).json({ error : error.message})
    }
}


export const editProfile = async (req, res) => {
 const userId = req.userId;
try {
    const {
          fullName, 
           avatar,
           phone

    } = req.body
    
    const user = await updateProfile({fullName,avatar,phone, userId})

    if(!user){
        return res.status(403).json({error : "User tidak ditemukan"})
    }

    res.json({ message : "Profile Berhasil diupdate", user})
} catch (error) {
    return res.status(500).json({error : error.message})
}
    
 
}