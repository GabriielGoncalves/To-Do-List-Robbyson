import { TaskService } from './TaskService';

export class FindTaskService extends TaskService {
    async findTask(description: string) {
        if (description.length === 0) {
            return 'Não é possível realizar pesquisa sem uma descrição';
        }

        const task = await this.repository.findByDescription(description);

        if (!task) return 'Não foi encontrada nenhuma tarefa';

        return task;
    }
}
