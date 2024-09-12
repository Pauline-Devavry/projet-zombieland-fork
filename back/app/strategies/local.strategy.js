import { Strategy as LocalStrategy } from "passport-local"
import bcrypt from "bcrypt"
import { User } from "../models/Index.js"

const localStrategy = new LocalStrategy({usernameField: "email"}, async (email, password, done) => {

    try {
        const user = await User.findOne({where: {email}})
        if(!user) {
            return done(null, false)
        }
        const isValidPassword = await bcrypt.compare(password, user.password)
        if(!isValidPassword) {
            return done(null, false)
        }
        return done(null, user)
    } catch (err) {
        return done(err)
    }

})

export default localStrategy