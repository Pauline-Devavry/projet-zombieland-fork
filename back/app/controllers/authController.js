import passport from "passport"
import jwt from "jsonwebtoken"
import { User } from "../models/Index.js"
import bcrypt from "bcrypt"

export const login = async (req,res,next) => {

    passport.authenticate("local", {session: false}, (err, user, info) => {
        
        if(err || !user) {
            return res.status(400).json({
                message: "Unauthorize request"
            })
        }

        const token = jwt.sign({user_id: user.id}, process.env.JWT_SECRET, {expiresIn: "1h"})
        return res.json({token})

    })(req,res,next)

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
 

        const hashedPassword = await bcrypt.hash(password, 10);

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