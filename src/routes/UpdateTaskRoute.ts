import { Router } from 'express';
import { UpdateTaskController } from '../controller/UpdateTaskController';

export const updateTaskRoute = Router();

updateTaskRoute.put('/update/:id', new UpdateTaskController().execute);
