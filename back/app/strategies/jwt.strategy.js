import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import {  User } from "../models/Index.js"

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}

const jwtStrategy = new JwtStrategy(jwtOptions, async (payload, done) => {
    try {
        const user = await User.findByPk(payload.user_id)

        if(!user) {
            return done(null, false)
        }
        return done(null, user)
    } catch (error) {
        return done(error, false)
    }
})

export default jwtStrategy
