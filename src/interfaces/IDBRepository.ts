import { ITaskSchema } from './ITaskSchema';

export interface IDBRepository {
    register(data: any): Promise<any>;
    delete(id: any): Promise<any>;
    findTaskById(id: any): Promise<any>;
    updateTask(id: string, data: any): Promise<any>;
    findByDescription(data: any): Promise<any>;
    doneTask(id: any): Promise<any>;
    archiveTask(id: any): Promise<any>;
}
