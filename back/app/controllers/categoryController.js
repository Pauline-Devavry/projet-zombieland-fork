import { Category } from "../models/Index.js";
import Joi from "joi";
import { usePagination } from "../utils/pagination.js";

export async function getAllCategory(req, res) {

  const { limit, offset } = usePagination(req.query)

  const category = await Category.findAll({
    limit,
    offset
  });

  return res.json(category).status(200);
}

export async function getOneCategory(req, res, next) {
  const id = Number(req.params.id);
  const CategoryId = await Category.findByPk(id);
  if (CategoryId) {
    res.json(CategoryId).status(200);
  } else {
    next();
  }
}

export async function createOneCategory(req, res, next) {
  const categorySchema = Joi.object({
    name: Joi.string().min(1).required(),
    description: Joi.string().required(),
  });

  const { error } = categorySchema.validate(req.body);
  if (error) {
    const errorMessage = { message: "Vous devez remplir tous les champs" };
    return res.status(400).json(errorMessage);
  }

  const { name, description } = req.body;

  const createdOneCategory = await Category.create({ name, description });

  return res.status(201).json({
    message: "Catégorie créée avec succès.",
    attraction: createdOneCategory,
  });
}

export async function deleteOneCategory(req, res, next) {
  const id = Number(req.params.id);
  await Category.destroy({ where: { id: id } });
  res.json("Vous venez d'effacer la catégorie").status(204);
}

export async function updateOneCategory(req, res, next) {
  const categorySchema = Joi.object({
    name: Joi.string().min(1).required(),
    description: Joi.string().required(),
  });

  const { error } = categorySchema.validate(req.body);
  if (error) {
    const errorMessage = { message: "Vous devez remplir tous les champs" };
    return res.status(400).json(errorMessage);
  }

  const id = Number(req.params.id);

  const { name, description } = req.body;
  const category = await Category.findByPk(id);

  if (name) {
    category.name = name;
  }

  if (description) {
    category.description = description;
  }

  const updatedOneCategory = await category.save();

  return res.status(200).json({
    message: "Catégorie mise a jour avec succès.",
    category: updatedOneCategory,
  });
}
