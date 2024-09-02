import dotenv from 'dotenv';

import express from 'express';  
import {router} from './app/router.js';
import multer from 'multer';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(multer().none());

app.use(router);

const port = process.env.PORT || 3000;
await app.listen(port);
console.log(`🚀 API Zombieland demarrée à l'adresse : http://localhost:${port}`);