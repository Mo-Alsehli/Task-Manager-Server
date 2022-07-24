import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import connectDB from "../db/connect";
import dotenv from "dotenv";
import tasks_route from "./handlers/tasks";
import notFound from "./middleware/not-found";
import errorHandler from "./middleware/error-handler";

dotenv.config();
const app: express.Application = express();
const port = process.env.PORT || 3000;

app.use(express.static("./public"));
app.use(bodyParser.json());

app.get("/", function (req: Request, res: Response) {
  res.send("Hello World!");
});

tasks_route(app);

app.use(notFound);
app.use(errorHandler);

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
