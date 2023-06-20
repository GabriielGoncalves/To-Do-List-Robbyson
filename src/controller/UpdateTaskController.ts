import { Request, Response } from 'express';
import { UpdateTaskService } from 'src/services/UpdateTaskService';

export class UpdateTaskController {
    async execute(req: Request, res: Response) {

        const taskUpdate = req.body;
        const service = new UpdateTaskService();

        const result = await service.update(req.params.id, taskUpdate);

        return result;
    }
}
