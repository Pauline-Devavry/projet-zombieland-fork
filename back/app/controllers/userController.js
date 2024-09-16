import bcrypt from 'bcrypt';
import { User } from "../models/User.js";

export async function getAllUsers(req, res) {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);  
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erreur lors de la récupération des utilisateurs." });
  }
}

export async function getOneUser(req, res, next) {
  const id = Number(req.params.id);
  const oneUser = await User.findByPk(id);
  if (oneUser) {
    res.json(oneUser).status(200); 
  } else {
  next ();
  }
}




