import { ITaskSchema } from '../interfaces/ITaskSchema';
import { TaskModel } from './models/TaskModel';

export class TaskDatabase {
    async register(task: ITaskSchema) {
        const newTask = this.createTask(task);

        newTask.save();

        return newTask;
    }

    private createTask(task: ITaskSchema) {
        const newTask = new TaskModel();
        newTask.description = task.description;
        newTask.date = `${new Date().toLocaleDateString()}`;

        return newTask;
    }

    async delete(id: string) {
        const foundedTask = await this.findTaskById(id);

        await TaskModel.deleteOne({ _id: foundedTask._id });

        return 'Deletado';
    }

    async findTaskById(id: string) {
        const task = await TaskModel.findById(id);

        if (!task) {
            throw new Error('Tarefa não encontrada');
        }
        return task;
    }
}
