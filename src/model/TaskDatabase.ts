import { createTask } from '../utils/task';
import { IDBRepository } from '../interfaces/IDBRepository';
import { ITaskSchema } from '../interfaces/ITaskSchema';
import { TaskModel } from './models/TaskModel';

class TaskDatabase implements IDBRepository {
    async doneTask(id: any): Promise<any> {
        return await TaskModel.updateOne(
            {
                _id: id,
            },
            {
                $set: {
                    done: true,
                },
            },
        );
    }

    async archiveTask(id: any): Promise<any> {
        return await TaskModel.updateOne(
            {
                _id: id,
            },
            {
                $set: {
                    hide: true,
                },
            },
        );
    }

    async findByDescription(data: string): Promise<any> {
        const task = await TaskModel.findOne({
            description: data,
        });

        return task;
    }
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

    async updateTask(id: string, data: ITaskSchema) {
        return await TaskModel.updateOne(
            {
                _id: id,
            },
            data,
        );
    }
}

const taskDatabase = new TaskDatabase();

export default taskDatabase;
