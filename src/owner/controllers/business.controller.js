import { storeBusiness } from "../services/business.service.js";


export const createBusiness = async (req, res) => {
  try {
    const {
      businessName,
      description,
      address,
      latitude,
      longitude,
      categoryId,
      phone,
      whatsapp,
      website,
      email,
      operatingHours,
    } = req.body;

    const ownerId = req.userId; 

    const business = await storeBusiness({
      businessName,
      description,
      address,
      latitude,
      longitude,
      categoryId,
      phone,
      whatsapp,
      website,
      email,
      ownerId,  
      operatingHours,
    });

    res.json({ message: "Data telah dibuat", business });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};