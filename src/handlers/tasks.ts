import { Task, TasksStore } from "../models/tasks";
import express, { Request, Response } from "express";

const store = new TasksStore();

const index = async (req: Request, res: Response) => {
  try {
    const tasks = await store.index();
    res.json(tasks);
  } catch (error) {
    throw new Error(`${error}`);
  }
};

const create = async (req: Request, res: Response) => {
  const task: Task = {
    name: req.body.name,
    completed: req.body.completed,
  };
  try {
    const created = await store.create(task);
    res.json(created);
  } catch (error) {
    throw new Error(`${error}`);
  }
};

const tasks_route = (app: express.Application) => {
  app.get("/tasks", index);
  app.post("/tasks", create);
};

export default tasks_route;
