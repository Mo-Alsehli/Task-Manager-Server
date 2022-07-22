import TaskModel from "../dbModels/task";

export type Task = {
  id?: string;
  name: string;
  completed: boolean;
};

export class TasksStore {
  async index(): Promise<Task[]> {
    try {
      return [
        { name: "task1", completed: true },
        { name: "task2", completed: false },
      ];
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
}
