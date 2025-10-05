import { storeBusiness, patchBusiness, storeSustainabilityPractice, storeBusinessAnalytics } from "../services/business.service.js";


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

export const updateBusiness = async (req, res) => {

   try {
     const { id } = req.params;
       const ownerId = req.userId; 
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

    // slug auto-update 
    const dataToUpdate = {
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
    };

    if (businessName) {
      dataToUpdate.slug = businessName.toLowerCase().replace(/\s+/g, "-");
    }

    const business = await patchBusiness({id : Number(id), ownerId,
        data : dataToUpdate
    })

    res.json({message : "Data Telah Diubah", business})
   } catch (error) {
    return res.status(500).json({error : error.message})
   }
}

export const addSustainabilityPractice = async(req, res) =>{
   
   try {
    
    const {id} = req.params
    
    const ownerId = req.userId
    const {
      practiceType,
      practiceDescription,
      workers
    } = req.body

    const sustainabilityPractice = await storeSustainabilityPractice({
      practiceType,
      practiceDescription,
      workers,
      id,
      ownerId,
      businessId: Number(id)
      
  })

      res.json({message : "data berhasil ditambahkan", sustainabilityPractice})

   } catch (error) {
      return res.status(500).json({error : error.message})
    
   }  
}

export const addBusinessAnalytics = async(req, res) => {

try {
  const {id} = req.params
  const {actionType, metaData } = req.body

const allowed = ["view", "click", "share", "review"];
    if (!allowed.includes(actionType)) {
      return res.status(400).json({ error: "Action type tidak valid" });
    }

    const businessAnalytics  = await storeBusinessAnalytics({
      actionType,
      metaData,
      businessId : Number(id)
    })
    res.json({message : "data telah dibuat", businessAnalytics})

} catch (error) {
  return res.status(500).json({error : error.message})
}
}