import { Attraction, Category } from "../models/Index.js";

export async function getAllAttractions (req, res) {
    
        const attractions = await Attraction.findAll({
          include : Category
        });
        
        return res.json(attractions).status(200);
      };

    
export async function getOneAttraction (req, res, next) {

  const id = Number(req.params.id)
  const AttractionId = await Attraction.findByPk(id, { include: Category});
   if(AttractionId) {
      res.json(AttractionId).status(200)
   }
  else {
  
   next();
   }
  };

  export async function createOneAttraction(req, res, next) {
  
    const { error } = req.body;
    if (error) {
      
      return next(error);
    }
    
    const { name, description, image_url, category_id} = req.body;
    
    
    const createdOneAttraction = await Attraction.create({name, description, image_url, category_id});
    
    res.status(201).json(createdOneAttraction);
    
  };

export async function deleteOneAttraction (req, res, next) {

  const id = Number(req.params.id);
    await Attraction.destroy({where : {id:id}});
    res.json("Vous venez d'effacer l'attraction").status(204);
    
};

export async function updateOneAttraction(req, res, next) {
  const id = Number(req.params.id)

  const { name, description, image_url, category_id } = req.body;
  const attraction = await Attraction.findByPk(id);

  if (name) {
    attraction.name = name
  }

  if (description) {
      attraction.description = description
    }

  if (image_url) {
      attraction.image_url = image_url
    }

  if (category_id) {
      attraction.category_id = category_id
    }
  
  const updatedOneAttraction = await Attraction.save();
  
  res.status(200).json(updatedOneAttraction);
  
};




 



