import { IDBRepository } from '../interfaces/IDBRepository';
import taskDatabase from '../model/TaskDatabase';

export class TaskService {
    protected repository: IDBRepository = taskDatabase;
}
