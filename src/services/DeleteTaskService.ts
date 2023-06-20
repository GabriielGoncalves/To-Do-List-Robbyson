import { TaskService } from './TaskService';

export class DeleteTaskService extends TaskService {
    async deleteTask(id: string) {
        return await this.repository.delete(id);
    }
}
