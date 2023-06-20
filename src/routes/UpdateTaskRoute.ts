import { Router } from 'express';
import { UpdateTaskController } from '../controller/UpdateTaskController';

const updateTaskRoute = Router();

updateTaskRoute.put('/update/:id', new UpdateTaskController().execute);
