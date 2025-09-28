import prisma from "../db/index.js"
import { search, nearby } from "../services/business.service.js";

export const searchUmkm = async (req, res) => {

    try {
        const  {q, category} = req.query;

        const {Business} = await search({q, category})

res.json(Business)

    } catch (error) {
        return res.status(500).json({error : error.message})
    }
}


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