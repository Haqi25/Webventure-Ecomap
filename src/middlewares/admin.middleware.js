import prisma from "../db/index.js"
import jwt from "jsonwebtoken";

export const adminMiddleware = async ( req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) return res.status(401).json({ error : "No Token Provided"});

    try {
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const role = await prisma.users.findUnique({
            where : {id : decoded.id}
        })

        if(!role){
            return res.status(404).json({error : "User Tidak Ditemukan"})
        }

        if(role.role !== "ADMIN"){
              return res.status(400).json({error : "Url Tidak Ditemukan"})
        }

        req.roleId = role.id,
        req.roleRole = role.role,
        next()
    } catch (error) {
        res.status(403).json({ error : "invalid Token"})
    }

}



    
