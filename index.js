import express from "express";
import dotenv from "dotenv";
import authUser from "./src/routes/auth.routes.js"
import umkm from "./src/routes/business.routes.js"
import category from "./src/routes/category.routes.js"
import { adminMiddleware } from "./src/middlewares/admin.middleware.js";
import { auth } from "google-auth-library";
import { authMiddleware } from "./src/middlewares/auth.middleware.js";
import profile from "./src/routes/profile.routes.js"



const app = express();

app.use(express.json());

dotenv.config();
app.get('/', (req, res) => {
res.send('Hello World!');
})

app.use("/api/auth", authUser);
app.use("/api/umkm", umkm);
app.use("/api/admin/category", adminMiddleware, category)
app.use("/api/profile", authMiddleware, profile)

const PORT = process.env.PORT || 3000;



app.listen(PORT, ()=> {
    console.log(`Server running on http://localhost:${PORT}`)
});
