import { TaskService } from './TaskService';

export class DoneTaskService extends TaskService {
    async doneTask(id: string) {
        const task = await this.repository.findTaskById(id);

        if (!task) return 'Nenhuma tarefa foi encontrada para esse id';

        await this.repository.doneTask(id);
    }
}
