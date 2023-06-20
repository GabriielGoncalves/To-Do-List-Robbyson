import { ITaskSchema } from '../interfaces/ITaskSchema';

export const createTask = (task: ITaskSchema) => {
    const newTask = new TaskModel();
    newTask.description = task.description;
    newTask.date = `${new Date().toISOString()}`;

    return newTask;
};
