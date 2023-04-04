import { ITaskSchema } from '../interfaces/ITaskSchema';
import { TaskDatabase } from '../model/TaskDatabase';

export class InsertTaskService {
    async insert(task: ITaskSchema) {
        const db = new TaskDatabase();
        const result = await db.register(task);

        return result;
    }
}
