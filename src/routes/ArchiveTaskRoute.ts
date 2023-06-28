import { Router } from 'express';
import { ArchiveTaskController } from '../controller/ArchiveTaskController';

export const archiveTaskRoute = Router();

archiveTaskRoute.patch('/archive/:id', new ArchiveTaskController().execute);
