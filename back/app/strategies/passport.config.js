import passport from "passport";
import localStrategy from "./local.strategy.js";

const configurePassport = () => {
    passport.use(localStrategy)
}

export default configurePassport