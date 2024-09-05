import "dotenv/config";

import express from "express";
import multer from "multer";

import { router } from "./app/router.js";

// Création de l'application
const app = express();

// Body parsers
app.use(express.json()); // application/json
app.use(express.urlencoded({ extended: true })); // application/x-www-form-urlencoded
app.use(multer().none()); // multipart/form-data

// Mise en place du router
app.use(router);

// Démarrage du serveur
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`🚀 API demarrée à l'adresse : http://localhost:${port}`);
})
