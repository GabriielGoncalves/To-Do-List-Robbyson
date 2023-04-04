import { Router } from 'express';
import { InsertTaskController } from '../controller/InsertTaskController';

export const InsertTaskRoute = Router();

InsertTaskRoute.post('/insert', new InsertTaskController().execute);
