import { createTask } from '../utils/task';
import { IDBRepository } from '../interfaces/IDBRepository';
import { ITaskSchema } from '../interfaces/ITaskSchema';
import { TaskModel } from './models/TaskModel';

class TaskDatabase implements IDBRepository {
    async register(task: ITaskSchema): Promise<ITaskSchema> {
        const newTask = createTask(task);
        newTask.save();

        return newTask;
    }

    async delete(id: string): Promise<string> {
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

const taskDatabase = new TaskDatabase();

export default taskDatabase;
