import "dotenv/config";
import passport from "passport";
import express from "express";
import router  from "./app/router/main.router.js";
import multer from "multer";
import cors from 'cors'

// Création de l'application
const app = express();

app.use(cors())
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
