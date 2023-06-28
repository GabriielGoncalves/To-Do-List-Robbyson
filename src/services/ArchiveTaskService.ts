import { TaskService } from './TaskService';

export class ArchiveTaskService extends TaskService {
    async archiveTask(id: string) {
        const task = await this.repository.findTaskById(id);

        if (!task) return 'Nenhuma tarefa encontrada para esse id';

        await this.repository.archiveTask(id);
    }
}
