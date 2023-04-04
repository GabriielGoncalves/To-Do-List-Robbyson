import { Router } from 'express';
import { DeleteTaskController } from '../controller/DeleteTaskController';

export const DeleteTaskRoute = Router();

DeleteTaskRoute.delete('/delete/:id', new DeleteTaskController().execute);
