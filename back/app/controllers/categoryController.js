import { Category } from "../models/Index.js";

export async function getAllCategory (req, res) {
    
    const category = await Category.findAll();
    
    return res.json(category).status(200);
  };

  export async function getOneCategory (req, res, next) {

    const id = Number(req.params.id)
    const CategoryId = await Category.findByPk(id);
     if(CategoryId) {
        res.json(CategoryId).status(200)
     }
    else {
    
     next();
     }
    };

  export async function createOneCategory(req, res, next) {
  
    const { error } = req.body;
    if (error) {
      
      return next(error);
    }
    
    const { name, description} = req.body;
    
    
    const createOneCategory = await Category.create({name, description});
    
    res.status(201).json(createOneCategory);
    
  };

export async function deleteOneCategory (req, res, next) {

  const id = Number(req.params.id);
    await Category.destroy({where : {id:id}});
    res.json("Vous venez d'effacer la catégorie").status(204);
    
};

export async function updateOneCategory(req, res, next) {
  const id = Number(req.params.id)

  const { name, description } = req.body;
  const category = await Category.findByPk(id);

  if (name) {
    category.name = name
  }

  if (description) {
      category.description = description
    }
  
  const updateOneCategory = await Category.save();
  
  res.status(200).json(updateOneCategory);
  
};