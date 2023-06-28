import { IDBRepository } from '../interfaces/IDBRepository';
import taskDatabase from '../model/TaskDatabase';

export abstract class TaskService {
    protected repository: IDBRepository = taskDatabase;
}
