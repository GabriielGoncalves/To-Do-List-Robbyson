import { TaskDatabase } from '../model/TaskDatabase';

export class DeleteTaskService {
    async deleteTask(id: string) {
        const database = new TaskDatabase();

        return await database.delete(id);
    }
}
