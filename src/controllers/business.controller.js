import prisma from "../db/index.js"
import { search, nearby,  business } from "../services/business.service.js";

export const searchUmkm = async (req, res) => {
  try {
    const { q, category, page = 1, limit = 10 } = req.query;

    // service return { data, meta }
    const { data, meta } = await search({ q, category, page: Number(page), limit: Number(limit) });

    res.json({
      message: "Daftar UMKM ditemukan",
      data,
      meta,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getNearby = async (req, res) => {
  try {
    const { lat, lng, radius } = req.query;

    if (!lat || !lng) {
      return res.status(400).json({ error: "Latitude dan longitude harus diisi" });
    }

    const withDistance = await nearby({lat, lng, radius})

    res.json(withDistance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};




export const businessId = async(req, res) => {
  try {
    
    const id = req.params.id

    const umkm = await business({id})

    if(!umkm) {
      return res.status(400).json({message : "umkm tidak ditemukan"})
    }

     res.json({ message : "Data Ditemukan", umkm})
  } catch (error) {
    return res.status(500).json({error : error.message})
    
    
  }
}