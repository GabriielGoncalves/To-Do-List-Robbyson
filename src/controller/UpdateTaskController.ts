import { Request, Response } from 'express';
import { UpdateTaskService } from '../services/UpdateTaskService';

export class UpdateTaskController {
    async execute(req: Request, res: Response) {
        const taskUpdate = req.body;
        const service = new UpdateTaskService();

        const result = await service.update(req.params.id, taskUpdate);

        return res.status(200).json({ msg: 'Atualizado com sucesso', result });
    }
}
