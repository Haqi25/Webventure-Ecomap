import express from "express";
import dotenv from "dotenv";
import authUser from "./src/routes/auth.routes.js"
import umkm from "./src/routes/business.routes.js"
import category from "./src/routes/category.routes.js"
import review from "./src/routes/review.routes.js"
import { adminMiddleware } from "./src/middlewares/admin.middleware.js";
import { authMiddleware } from "./src/middlewares/auth.middleware.js";
import profile from "./src/routes/profile.routes.js"
import getData from "./src/routes/admin/dashboard.routes.js"

const app = express();

app.use(express.json());

dotenv.config();
app.get('/', (req, res) => {
res.send('Hello World!');
})

//Consumer
app.use("/api/auth", authUser);
app.use("/api/umkm", umkm);
app.use("/api/admin/category", adminMiddleware, category)
app.use("/api/profile", authMiddleware, profile)
app.use("/api/review", authMiddleware, review )


//Admin

app.use("/api/admin", adminMiddleware, getData)

const PORT = process.env.PORT || 3000;



app.listen(PORT, ()=> {
    console.log(`Server running on http://localhost:${PORT}`)
});
