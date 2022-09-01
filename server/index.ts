import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import setupRoutes from "./routes/routes";

dotenv.config();

const port = process.env.PORT;
const app: Express = express();

app.use(express.json());

setupRoutes(app);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
