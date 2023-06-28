import { Router } from 'express';
import { DeleteTaskController } from '../controller/DeleteTaskController';

export const deleteTaskRoute = Router();

deleteTaskRoute.delete('/delete/:id', new DeleteTaskController().execute);
