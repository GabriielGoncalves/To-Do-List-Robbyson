import { Request, Response } from 'express';
import { DeleteTaskService } from '../services/DeleteTaskService';

export class DeleteTaskController {
    async execute(req: Request, res: Response) {
        const { id } = req.params;

        const service = new DeleteTaskService();

        const result = await service.deleteTask(id);

        res.status(200).json({ msg: 'Tarefa deletada com sucesso' });
    }
}
