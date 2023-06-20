import { ITaskSchema } from './ITaskSchema';

export interface IDBRepository {
    register(task: ITaskSchema): any;
    delete(id: string): any;
    findTaskById(id: string): any;
}
