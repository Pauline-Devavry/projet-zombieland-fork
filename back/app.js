import "dotenv/config";
import passport from "passport";
import express from "express";
import router  from "./app/router/main.router.js";
import multer from "multer";
import cors from 'cors'
import configurePassport from "./app/strategies/passport.config.js";

// Création de l'application
const app = express();

configurePassport()

app.use(passport.initialize())

app.use(cors({
  origin: 'http://localhost:5173', 
  methods: 'GET,POST,PUT,DELETE',  // Méthodes HTTP autorisées
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true
  
}));


// Body parsers
app.use(express.json()); // application/json
app.use(express.urlencoded({ extended: true })); // application/x-www-form-urlencoded
app.use(multer().none()); // multipart/form-data

app.use(passport.initialize());

// Mise en place du router
app.use(router);

// Démarrage du serveur
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(
    `🚀 API ZombieLand demarrée à l'adresse : http://localhost:${port}`
  );
});
