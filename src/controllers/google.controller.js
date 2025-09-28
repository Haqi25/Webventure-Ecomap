import { OAuth2Client } from 'google-auth-library'
import prisma from "../db/index.js"
import jwt from "jsonwebtoken"

export const google = async (req, res) => {
       

    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
    try {

        const {token} = req.body;


        const ticket = await client.verifyIdToken({
          idToken : token,
          audience : process.env.GOOGLE_CLIENT_ID

        })

        const payload = ticket.getPayload();
        const {email, name, avatar} = payload;


        let user = await prisma.users.findUnique({where : {email}});
const defaultAvatar = "https://res.cloudinary.com/demo/image/upload/v123456789/avatar.png";

        if(!user) {

            user = await prisma.users.create({
           data :

           {
            fullName : name, 
            email,
            phone : null,
           avatar: avatar || defaultAvatar,
          password: null,
          isVerified: true,
           }
                
            })
        }

        const appToken = jwt.sign(
            {id : user.id, email : user.email},
            process.env.JWT_SECRET,
            {expiresIn : "1h"}
        )

        res.json({message : "Login Successful", token : appToken, user})
        
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
}


//openid email profile
