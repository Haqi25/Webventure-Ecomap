import { allBusiness,  detail} from "../services/business.services.js";

export const findAllBusiness = async (req, res) => {

try {
    const business = await allBusiness()

    res.json({business})

} catch (error) {
    return res.status(500).json({error : error.message})
}
}

export const detailBusiness = async(req, res) => {
    try {
        const {id} = req.params;
        const business = await detail({id})

        res.json({business})
    } catch (error) {
        return res.status(500).json({error : error.message})
    }
}

