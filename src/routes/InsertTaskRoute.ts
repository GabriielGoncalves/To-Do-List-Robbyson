import { Router } from 'express';
import { InsertTaskController } from '../controller/InsertTaskController';

export const insertTaskRoute = Router();

insertTaskRoute.post('/insert', new InsertTaskController().execute);
