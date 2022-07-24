import { Task, TasksStore } from "../models/tasks";
import express, { Request, Response } from "express";
import asyncWrapper from "../middleware/async";

const store = new TasksStore();

const index = asyncWrapper(async (req: Request, res: Response) => {
  const tasks = await store.index();
  res.json({ tasks });
});

const create = asyncWrapper(async (req: Request, res: Response) => {
  const task: Task = {
    name: req.body.name,
    completed: req.body.completed,
  };
  const created = await store.create(task);
  res.json(created);
});

const show = asyncWrapper(async (req: Request, res: Response) => {
  const id = req.params.id;
  const task = await store.show(id);
  if (!task) {
    res.status(404).json({ msg: `There Is No Task With Id: ${id}` });
  }
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req: Request, res: Response) => {
  const id = req.params.id;
  const task = await store.delete(id);
  if (!task) {
    res.status(404).json({ msg: `There Is No Task With Id: ${id}` });
  }
  res.status(200).json(task);
});

const update = asyncWrapper(async (req: Request, res: Response) => {
  const id = req.params.id;
  const task: Task = {
    name: req.body.name,
    completed: req.body.completed,
  };
  const updatedTask = await store.update(id, task);
  if (!task) {
    res.status(404).json({ msg: `There Is No Task With Id: ${id}` });
  }
  res.status(200).json({ updatedTask });
});

const tasks_route = (app: express.Application) => {
  app.get("/api/v1/tasks/", index);
  app.post("/api/v1/tasks/", create);
  app.get("/api/v1/tasks/:id", show);
  app.delete("/api/v1/tasks/:id", deleteTask);
  app.patch("/api/v1/tasks/:id", update);
};

export default tasks_route;
