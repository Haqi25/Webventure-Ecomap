import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) return res.status(401).json({ error : "No Token Provided"});

    try {
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.userId  = decoded.id;
        next()
    } catch (error) {
        res.status(500).json({ error : error.message})
    }


    
}



