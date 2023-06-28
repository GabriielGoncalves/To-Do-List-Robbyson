import { Router } from 'express';
import { DoneTaskController } from '../controller/DoneTaskController';

export const doneTaskRoute = Router();

doneTaskRoute.patch('/done/:id', new DoneTaskController().execute);
