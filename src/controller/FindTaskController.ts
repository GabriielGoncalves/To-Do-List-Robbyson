import { Request, Response } from 'express';
import { FindTaskService } from '../services/FindTaskService';

export class FindTaskController {
    public async execute(req: Request, res: Response) {
        const { description } = req.body;

        const service = new FindTaskService();

        const result = await service.findTask(description);

        return res.status(200).json({ msg: result });
    }
}
