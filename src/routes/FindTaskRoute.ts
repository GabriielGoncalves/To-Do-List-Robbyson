import { Router } from 'express';
import { FindTaskController } from '../controller/FindTaskController';

export const findTaskRoute = Router();

findTaskRoute.get('/find', new FindTaskController().execute);
