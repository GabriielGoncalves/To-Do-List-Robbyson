import { ITaskSchema } from '../interfaces/ITaskSchema';
import { TaskService } from './TaskService';

export class InsertTaskService extends TaskService {
    async insert(task: ITaskSchema) {
        const result = await this.repository.register(task);

        return result;
    }
}
