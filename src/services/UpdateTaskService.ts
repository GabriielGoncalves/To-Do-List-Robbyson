import { ITaskSchema } from '../interfaces/ITaskSchema';
import { TaskService } from './TaskService';

export class UpdateTaskService extends TaskService {
    async update(id: string, data: ITaskSchema) {
        const task = await this.repository.findTaskById(id);

        
    }
}
