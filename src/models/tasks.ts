import TaskModel from "../dbModels/task";
import "express-async-errors";

export type Task = {
  id?: string;
  name: string;
  completed: boolean;
};

export class TasksStore {
  async index(): Promise<Task[]> {
    try {
      const tasks = await TaskModel.find({});
      return tasks;
    } catch (error) {
      throw new Error(`Couldn't Get Tasks: ${error}`);
    }
  }

  async create(task: Task): Promise<Task> {
    try {
      const created = (await TaskModel.create(task)) as Task;
      return created;
    } catch (error) {
      throw new Error(`Couldn't Create Task: ${error}`);
    }
  }

  async show(id: string): Promise<Task> {
    try {
      const task = (await TaskModel.findOne({ _id: id })) as Task;
      return task;
    } catch (error) {
      throw new Error(`Couldn't Show Task: ${error}`);
    }
  }

  async delete(id: string): Promise<Task> {
    try {
      const task = (await TaskModel.findOneAndDelete({ id })) as Task;
      return task;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async update(id: string, task: Task): Promise<Task> {
    try {
      const updatedTask = (await TaskModel.findOneAndUpdate({ id }, task, {
        new: true,
        runValidators: true,
      })) as Task;
      return updatedTask;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}
