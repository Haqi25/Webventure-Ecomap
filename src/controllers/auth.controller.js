import {loginUser, registerUser, verifyEmail,  AccessToken } from "../services/auth.services.js"
import { Prisma } from "@prisma/client";

export const register = async (req, res) => {

  
    try {
        const {
            fullName, 
            email,
            avatar,
            phone,
            password
        } = req.body;
if (!password) {
  return res.status(400).json({ error: "Password is required" });
}
    const result = await registerUser({fullName, email, avatar, phone, password})

    res.json({ message: "User Registered. Please check your email to verify.", data : result });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
  if (error.code === "P2002") {
    const target = error.meta?.target;

    if (target?.includes("email")) {
      return res.status(400).json({ error: "Email already registered" });
    }

    if (target?.includes("phone")) {
      return res.status(400).json({ error: "Phone already registered" });
    }

    return res.status(400).json({ error: "Unique constraint failed" });
  }
}
    res.status(500).json({ error: error.message });
  }
};

export const verifyemail = async (req, res) => {
    try {
        
        const {token} =  req.query;

        const user = await verifyEmail({token})
       


         res.json({message :"Email verified successfully!", data: user})
          if(!user) return res.status(400).json({ error : "invalid token"})
    } catch (error) {
      return res.status(500).json({error: error.message})
        
    }
}

export const login = async (req, res) =>{
    try {
        const {
        
            
            email,
            password,
        } = req.body;
        
        if (!password || !email) {
  return res.status(400).json({ error: "Password and Email is required" });
}
  
const {token, refreshToken} = await loginUser({email, password})

        res.json({ message : "Login Successful", token, refreshToken});
    } catch (error) {
        res.status(500).json({error : error.message})
    }
};

export const refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body; 

    if (!refreshToken) {
      return res.status(401).json({ error: "Refresh token required" });
    }

  const newAccessToken = await AccessToken({refreshToken})
 
      return res.json({
       newAccessToken
      });
    
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};





export const requestResetPassword = async (req, res) => {

  try {
    const {email} = req.body;

    const user = await prisma.users.findUnique({ where : {email}});

    if (!user) return res.status(404).json({ error : "User Not Found"});

    if(!user.isVerified) return res.status(400).json({error : "User Not Verified"})

    const token = jwt.sign(

      {email : user.email},
      process.env.JWT_SECRET,
      { expiresIn: "20m"}

    )

    await prisma.users.update({
      where : {id : user.id},
      data :{verifyToken : token}
  })


    const resetlink = `http://localhost:3002/api/auth/resetpassword?token=${token}`

      const transporter = nodemailer.createTransport({
        service : "gmail",
        auth : {
            user : process.env.EMAIL_USER,
            pass : process.env.USER_PASS
        }
    })
  await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Verify your email",
      html: `
        <h3>Welcome, ${user.fullName}!</h3>
        <p>Please reset your password by clicking below:</p>
        <a href="${resetlink}">${resetlink}</a>
      `,
    });

    res.json({message : "Reset password link sent to your email"})

  } catch (error) {
    return res.status(500).json({error : error.message})
  }
}

export const resetpassword = async (req, res) => {

  try {
    
    const {token} = req.query;
    const {newPassword} = req.body;

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    const user = await prisma.users.findFirst({
      where : {email : decoded.email, verifyToken : token}
    })

    if(!user) return res.status(404).json({message : "User not found"});
    if(!user.isVerified) return res.status(403).json({message : "user not verified please verify first"})

      const hashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.users.update({
      where : {id : user.id},
      data : { password : hashedPassword, verifyToken : null}
  })
    
    res.json({ message : "Password reset successful!"})
  }

  catch(error){
         return res.status(400).json({ error: "Invalid or expired token"})
  }
}


export const logout = async (req, res) => {
 try {
  
  const userid = req.userId;

const user = await prisma.users.update({
  where : {id : userid},
  data : { refreshToken  : null},
  
})

res.json({ message : "Logout Successfully"})
 } catch (error) {
    return res.status(500).json({error : error.message})
 }
};


