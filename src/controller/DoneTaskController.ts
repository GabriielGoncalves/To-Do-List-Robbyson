import { Request, Response } from 'express';
import { DoneTaskService } from '../services/DoneTaskService';

export class DoneTaskController {
    async execute(req: Request, res: Response) {
        const { id } = req.params;

        const service = new DoneTaskService();

        await service.doneTask(id);

        return res.status(200).json({ msg: 'Tarefa concluida com sucesso' });
    }
}
