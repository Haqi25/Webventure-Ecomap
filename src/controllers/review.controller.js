import { reviewStore } from "../services/review.services.js";


export const addReview = async (req, res) => {
 const userId = req.userId;
    const {
     
     ratingOverall,
     ratingSustainability,
      ratingQuality,
      comment,
      businessId,
     } = req.body

    try {
        
        const review = await reviewStore({
            userId,
     ratingOverall,
     ratingSustainability,
      ratingQuality,
      comment,
    businessId,
 })
    res.json({message : "Review berhasil ditambahkan", review})
    
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}