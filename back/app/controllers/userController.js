import bcrypt from 'bcrypt';
import { User } from "../models/User.js";
const saltRounds = 10;  

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

export const register = async (req, res) => {
    const { name, first_name, email, password, confirmPassword } = req.body;

   
    if (password !== confirmPassword) {
        return res.status(400).json({ error: "Les mots de passe ne correspondent pas." });
    }

    try {
      const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: "Cet utilisateur existe déjà." });
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);

          const newUser = await User.create({
            name,
            first_name,
            email,
            password: hashedPassword,
            role: "utilisateur"
        });

        await newUser.save();

        return res.status(201).json({ message: "Utilisateur enregistré avec succès !" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erreur serveur, veuillez réessayer plus tard." });
    }
};




