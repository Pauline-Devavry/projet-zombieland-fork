import passport from "passport";
import { BasicStrategy } from "passport-http";
import Scrypt from "../auth/Scrypt.js";
import { User } from "../models/User.js";
import emailValidator from "email-validator";

// Configuration de Passport avec HTTP Basic Authentication
passport.use(
  new BasicStrategy(async (email, password, done) => {
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return done(null, false);
      }
      const isValid = await Scrypt.verify(password, user.password);
      if (!isValid) {
        return done(null, false);
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

const userController = {
  async register(req, res) {
    try {
      const {
        name,
        first_name,
        email,
        password,
        confirmation: confirmationPassword,
      } = req.body;

      //  Tous les champs sont présents
      if (!name || !first_name || !email || !password) {
        return res
          .status(400)
          .json({ error: "Veuillez remplir tous les champs." });
      }

      //  Email valide
      if (!emailValidator.validate(email)) {
        return res.status(400).json({ error: "Cet email n'est pas valide." });
      }

      //  Confirmation du mot de passe
      if (password !== confirmationPassword) {
        return res.status(400).json({
          error:
            "La confirmation du mot de passe ne correspond pas au mot de passe renseigné.",
        });
      }

      const existingUserWithSameEmail = await User.findOne({
        where: { email },
      });

      if (existingUserWithSameEmail) {
        return res
          .status(400)
          .json({ error: "Un utilisateur avec cet email existe déjà." });
      }

      //  On hash le mot de passe
      const encryptedPassword = await Scrypt.hash(password);

      //  On stocke l'utilisateur en BDD
      await User.create({
        name,
        first_name,
        email,
        password: encryptedPassword,
      });

      res.status(201).json({ message: "Utilisateur créé avec succès" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  },

  // Middleware d'authentification
  authenticate: passport.authenticate("basic", { session: false }),
};

export default userController;
