import express from "express";
import dotenv from "dotenv";
import authUser from "./src/routes/auth.routes.js"
import umkm from "./src/routes/business.routes.js"
import category from "./src/routes/category.routes.js"
import review from "./src/routes/review.routes.js"
import { adminMiddleware } from "./src/middlewares/admin.middleware.js";
import { authMiddleware } from "./src/middlewares/auth.middleware.js";
import {umkmMiddleware} from "./src/middlewares/umkm.middleware.js";
import profile from "./src/routes/profile.routes.js"
import getData from "./src/admin/routes/dashboard.routes.js"
import getDataUser from "./src/admin/routes/user.data.routes.js"
import ownerBusiness from "./src/owner/routes/business.routes.js"
import approvalBusiness from "./src/admin/routes/approved.business.routes.js"


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

app.use("/api/admin", adminMiddleware, getData, getDataUser, approvalBusiness)


//owner business(umkm)

app.use("/api/owner", umkmMiddleware, ownerBusiness)


const PORT = process.env.PORT || 3000;



app.listen(PORT, ()=> {
    console.log(`Server running on http://localhost:${PORT}`)
});
