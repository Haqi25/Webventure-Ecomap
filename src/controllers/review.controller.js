import { reviewStore, reviewUpdate, reviewDestroy } from "../services/review.services.js";

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

export const patchReview = async (req, res) => {
  try {
    const  id  = parseInt(req.params.id);
    const { ratingOverall, ratingSustainability, ratingQuality, comment } = req.body;

    const updated = await reviewUpdate({
     id,
      userId: req.userId, 
      ratingOverall,
      ratingSustainability,
      ratingQuality,
      comment,
    });

    res.json({
      message: "Review berhasil diperbarui",
      review: updated,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteReview = async(req, res) => {

    try {
        
    const id = parseInt(req.params.id);
    const userId = req.userId

        const deleteReview = await reviewDestroy({id,
            userId,
        })

        res.json({message : "Review Berhasil Dihapus", deleteReview})
    } catch (error) {
        return res.status(500).json({error : error.message})
    }
}