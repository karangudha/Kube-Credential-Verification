import express, { type Application } from 'express';
import cors from "cors";
import dotenv from 'dotenv';

dotenv.config();        

const app: Application = express();
app.use(cors())
app.use(express.json());

import verifictionRoute from "./src/routes.js";
app.use('/api/v1/credential', verifictionRoute);

export { app };