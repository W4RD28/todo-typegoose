import express, { Request, Response } from "express";
import mongoose from 'mongoose'

import todo from './routes/todo'
import "dotenv/config"

const app = express();

app.use(express.json());

app.use('/api', todo)
app.get("/", (req: Request, res: Response): Response => {
  return res.json({ 
    message: "Monki flip",
    status: 200 
  });
});

const start = async (): Promise<void> => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}`);
    app.listen(3000, () => {
      console.log("The primates are ready on port 3000");
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();