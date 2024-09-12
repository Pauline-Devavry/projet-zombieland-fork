import { Attraction, Category } from "../models/Index.js";
import Joi from "joi";
import { usePagination } from "../utils/pagination.js";

export async function getAllAttractions(req, res) {
    
    const { limit, offset } = usePagination(req.query);
    
    const attractions = await Attraction.findAll({
        include: Category,
        order: [["id", "ASC"]],
        limit,
        offset
    });
    
    return res.json(attractions).status(200);
}

export async function getOneAttraction(req, res, next) {
    const id = Number(req.params.id);
    const AttractionId = await Attraction.findByPk(id, { include: Category });
    if (AttractionId) {
        res.json(AttractionId).status(200);
    } else {
        next();
    }
}

//! To be deleted because of the new paginations system 

// export async function getFifteenAttractions(req, res) {
//     const attractions = await Attraction.findAll({
//         include: Category,
//         order: [["id", "ASC"]],
//         limit: 15,
//     });
    
//     return res.json(attractions).status(200);
// }

export async function createOneAttraction(req, res, next) {
  const attractionSchema = Joi.object({
    name: Joi.string().min(1).required(),
    description: Joi.string().required(),
    image_url: Joi.string().required(),
    category_id: Joi.number().required(),
  });

  const { error } = attractionSchema.validate(req.body);
  if (error) {
    const errorMessage = { message: "Vous devez remplir tous les champs" };
    return res.status(400).json(errorMessage);
  }

  const { name, description, image_url, category_id } = req.body;

  const createdOneAttraction = await Attraction.create({
    name,
    description,
    image_url,
    category_id,
  });


  return res.status(201).json({
    message: "Attraction créée avec succès.",
    attraction: createdOneAttraction,
  });
}

export async function deleteOneAttraction(req, res, next) {
    const id = Number(req.params.id);
    await Attraction.destroy({ where: { id: id } });
    res.json("Vous venez d'effacer l'attraction").status(204);
}

export async function updateOneAttraction(req, res, next) {

    const id = Number(req.params.id);

    const attractionSchema = Joi.object({
        name: Joi.string().min(1),
        description: Joi.string(),
        image_url: Joi.string(),
        category_id: Joi.number()
    });
    
    const { error } = attractionSchema.validate(req.body);
    if (error) {
        return res.status(400).json({error});
    }
    
    const attraction = await Attraction.findByPk(id);

    if(!attraction) return res.status(404).send({erreur: "Attraction non trouvé !"})
    
    const updatedOneAttraction = await attraction.update(req.body);
    
    return res.status(200).json({
        message: "Attraction mise a jour avec succès.",
        attraction: updatedOneAttraction,
    });
}
