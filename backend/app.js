import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();        

const app = express();
app.use(cors())
app.use(express.json());
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// })
import verifictionRoute from './src/routes.js';
app.use('/api/v1/credential', verifictionRoute);

export { app };