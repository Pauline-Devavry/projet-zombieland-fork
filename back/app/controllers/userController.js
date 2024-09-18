import bcrypt from "bcrypt";
import { User } from "../models/User.js";
import Joi from "joi";

export async function getAllUsers(req, res) {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Erreur lors de la récupération des utilisateurs." });
  }
}

export async function getOneUser(req, res, next) {
  const id = Number(req.params.id);
  const oneUser = await User.findByPk(id);
  if (oneUser) {
    res.json(oneUser).status(200);
  } else {
    next();
  }
}

export async function updateUser(req, res, next) {
  const { name, first_name, email, oldPassword, newPassword } = req.body;
  // Définir le schéma de validation
  const userSchema = Joi.object({
    name: Joi.string().optional(),
    first_name: Joi.string().optional(),
    email: Joi.string().email().optional(),
    oldPassword: Joi.string().optional(),
    newPassword: Joi.string().optional(), // Exemple de validation pour le mot de passe
  });
  const { error } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
    // Trouver l'utilisateur à partir de l'ID de la session (supposé disponible dans req.user.id)
    const user = await User.findByPk(req.user.id);
    // Mise à jour des champs de l'utilisateur
    if (name) user.name = name;
    if (first_name) user.first_name = first_name;
    if (email) user.email = email;
    // Gestion des mots de passe
    if (oldPassword && newPassword) {
      // Vérifiez l'ancien mot de passe
      const isPasswordValid = await bcrypt.compare(oldPassword, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Ancien mot de passe incorrect" });
      }
      // Hash du nouveau mot de passe
      user.password = await bcrypt.hash(newPassword, 10);
    }
    // Enregistrer les modifications
    await user.save();
    return res
      .status(200)
      .json({ message: "Utilisateur mis à jour avec succès" });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ error: "Erreur lors de la mise à jour de l'utilisateur" });
  }
}

export async function getTotalUsers(req, res) {
  const total = await User.count()
  res.json({total})
}
