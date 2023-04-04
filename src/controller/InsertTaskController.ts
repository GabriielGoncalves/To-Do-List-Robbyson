import { Request, Response } from 'express';
import { ITaskSchema } from '../interfaces/ITaskSchema';
import { InsertTaskService } from '../services/InsertTaskService';

export class InsertTaskController {
    async execute(req: Request, res: Response) {
        const task: ITaskSchema = req.body;
        const service = new InsertTaskService();

        const result = await service.insert(task);

        return res.status(201).json({ msg: result });
    }
}
