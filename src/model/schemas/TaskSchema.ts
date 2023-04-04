import { Schema } from 'mongoose';
import { ITaskSchema } from '../../interfaces/ITaskSchema';

export const TaskSchema = new Schema<ITaskSchema>({
    description: { type: String, required: true },
    hide: { type: Boolean, required: false, default: false },
    done: { type: Boolean, required: false, default: false },
    date: { type: String, required: true },
});
