import { Request, Response } from 'express';
import { ArchiveTaskService } from '../services/ArchiveTaskService';

export class ArchiveTaskController {
    async execute(req: Request, res: Response) {
        const { id } = req.params;

        const service = new ArchiveTaskService();

        await service.archiveTask(id);

        return res.status(200).json({ msg: 'Tarefa arquivada' });
    }
}
