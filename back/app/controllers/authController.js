import passport from "passport"
import jwt from "jsonwebtoken"

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