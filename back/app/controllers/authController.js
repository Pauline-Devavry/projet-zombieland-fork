import passport from "passport"
import jwt from "jsonwebtoken"
import { User, Refreshtoken } from "../models/Index.js"
import bcrypt from "bcrypt"

export const login = async (req,res,next) => {

    passport.authenticate("local", {session: false}, async (err, user, info) => {
        
        if(err || !user) {
            return res.status(400).json({
                message: "Unauthorize request"
            })
        }

        const access_token = jwt.sign({user_id: user.id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "15m"})
        const refresh_token = jwt.sign({user_id: user.id}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: "7d"})

        await Refreshtoken.create({
            token: refresh_token,
            user_id: user.id,
            expiry_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        })

        res.cookie('refresh_token', refresh_token, {
            secure: process.env.NODE_ENV === "prod",
            httpOnly: true,
            sameSite: "Strict",
            // No max age because we need the cookies  to know the refresh token when we want to delete it
            // in database
        })

        res.cookie('access_token', access_token, {
            secure: process.env.NODE_ENV === "prod",
            httpOnly: true,
            sameSite: "Strict",
            maxAge: 15 * 60 * 1000
        })

        return res.json("Authentification réussi")

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

export const refreshAccessToken = (req, res, next) => {
    const refreshToken = req.cookies.refresh_token
    
    if(!refreshToken) return res.status(403).json("Aucun token trouvé.")

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async (err, payload) => {
            const tokenRecord = await Refreshtoken.findOne({
                where: { token: refreshToken },
                include: User
            })
            if(err || !tokenRecord) {
                if(err && err.name === "TokenExpiredError") {
                    res.clearCookie("refresh_token")
                    await tokenRecord?.destroy()
                }
                return res.status(403).json("Token invalide ou expiré.")
            }

            console.log("TOKEN VALIDE OUII")

            const decodedToken = jwt.decode(refreshToken)
    
            const newRefreshToken = jwt.sign(
                {user_id: tokenRecord.user_id},
                process.env.REFRESH_TOKEN_SECRET,
                {expiresIn: decodedToken.exp - Math.floor(Date.now() / 1000)}
            )
            const newAccessToken = jwt.sign(
                {user_id: tokenRecord.user_id}, 
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn: "15m"}
            )
    
            await tokenRecord.update({
                token: newRefreshToken
            })
    
            res.cookie('refresh_token', newRefreshToken, {
                secure: process.env.NODE_ENV === "prod",
                httpOnly: true,
                sameSite: "Strict",
            })
    
            res.cookie('access_token', newAccessToken, {
                secure: process.env.NODE_ENV === "prod",
                httpOnly: true,
                sameSite: "Strict",
                maxAge: 15 * 60 * 1000 // 15 minutes
            })
    
            res.send({Message: "Nouveau token generer"})

    })

}

export const getUserDetails = (req, res) => {
    const { dataValues } = req.user
    const { password, name, ...userData} = dataValues
    res.json(userData)
};

export const checkRefreshToken = (req, res, next) => {
    const hasCookie = req.cookies.refresh_token
    if(!hasCookie) {
        return res.json(false)
    } 
    res.json(true)
}