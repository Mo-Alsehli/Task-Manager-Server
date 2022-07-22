import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import connectDB from "../db/connect";
import dotenv from "dotenv";
import tasks_route from "./handlers/tasks";

dotenv.config();
const app: express.Application = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/", function (req: Request, res: Response) {
  res.send("Hello World!");
});

tasks_route(app);

const start = async () => {
  try {
    const connString = process.env.MONGO_URL as string;
    await connectDB(connString);
    app.listen(port, function () {
      console.log(`Server Staring On Port: ${port}...`);
    });
  } catch (error) {
    throw new Error(`${error}`);
  }
};
start();
