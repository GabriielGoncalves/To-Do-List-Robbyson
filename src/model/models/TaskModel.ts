import { model } from 'mongoose';
import { TaskSchema } from '../schemas/TaskSchema';

export const TaskModel = model('Task', TaskSchema);
