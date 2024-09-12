import passport from "passport";
import localStrategy from "./local.strategy.js";
import jwtStrategy from "./jwt.strategy.js";

const configurePassport = () => {
    passport.use(localStrategy)
    passport.use(jwtStrategy)
}

export default configurePassport