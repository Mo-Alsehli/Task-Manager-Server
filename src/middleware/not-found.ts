import { Request, Response } from "express";

const notFound = (_req: Request, res: Response) => {
  res.status(404).send(`<h1>Route Doesn't Exist</h1>`);
};

export default notFound;
