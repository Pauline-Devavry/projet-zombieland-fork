import passport from "passport"
import jwt from "jsonwebtoken"
import { User } from "../models/Index.js"
import bcrypt from "bcrypt"
import { Refreshtoken } from "../models/Index.js"

export const login = async (req,res,next) => {

    passport.authenticate("local", {session: false}, async (err, user, info) => {
        
        if(err || !user) {
            return res.status(400).json({
                message: "Unauthorize request"
            })
        }

        const accessToken = jwt.sign({user_id: user.id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "15m"})
        const refresh_token = jwt.sign({user_id: user.id}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: "7d"})

        await Refreshtoken.create({
            token: refresh_token,
            user_id: user.id,
            expiryDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        })

        res.cookie('access_token', accessToken, {
            secure: false,
            httpOnly: true,
            sameSite: "Strict",
            maxAge: 15 * 60 * 1000
        })

        return res.json({accessToken})

    })(req,res,next)
 {}
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