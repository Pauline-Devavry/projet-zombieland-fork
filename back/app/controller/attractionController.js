import { Attraction } from "../models/Index.js";

const attractionController = {
    async getAll(req, res) {
        const attractions = await Attraction.findAll({});
    
        res.json(attractions).res.status(200);
      },
    
      async getOne(req, res, next) {
        const attractionId = req.params.id;
    
        const attraction = await Attraction.findByPk(attractionId);
    
        res.json(attraction).res.status(200);
      },
}

export { attractionController };