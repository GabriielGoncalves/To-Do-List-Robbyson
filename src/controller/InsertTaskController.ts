import { Request, Response } from 'express';
import { InsertTaskService } from '../services/InsertTaskService';
import { TaskService } from '../services/TaskService';

export class InsertTaskController extends TaskService {
    async execute(req: Request, res: Response) {
        const result = await new InsertTaskService().insert(req.body);

        return res.status(201).json({ msg: result });
    }
}
