import multer from "multer";
import path from "path";


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },

    filename : (req, file, cb) =>  {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
         cb(null, uniqueSuffix + path.extname(file.originalname)); 
    }
});



const fileFilter = (req, file, cb) => {
   if (file.mimetype.match(/^image\/(jpeg|png|webp)$/)) {
        cb(null, true)
    } else {
        cb(new Error("Hanya file gambar yang diperbolehkan", false))
    }
}




 export const upload  = multer({
    storage,
    fileFilter,
    limits: { fileSize: 2 * 1024 * 1024 }
 })
