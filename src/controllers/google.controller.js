import { googleLogin } from '../services/google.services.js';

export const google = async (req, res) => {
    try {

        const {token} = req.body;

        const newToken = await googleLogin({token})
        res.json({message : "Login Successful", newToken})
        
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
}


//openid email profile
