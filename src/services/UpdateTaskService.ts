import { ITaskSchema } from '../interfaces/ITaskSchema';
import { TaskService } from './TaskService';

export class UpdateTaskService extends TaskService {
    async update(id: string, data: ITaskSchema) {
        const task = await this.repository.findTaskById(id);

        if (!task) throw new Error('Não existe essa tarefa');

        return await this.repository.updateTask(id, data);
    }
}
