import 'dotenv/config';

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import { insertTaskRoute } from './routes/InsertTaskRoute';
import { deleteTaskRoute } from './routes/DeleteTaskRoute';
import { updateTaskRoute } from './routes/UpdateTaskRoute';
import { findTaskRoute } from './routes/FindTaskRoute';
import { doneTaskRoute } from './routes/DoneTaskRoute';
import { archiveTaskRoute } from './routes/ArchiveTaskRoute';

export class Application {
    public app: express.Application;
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
        this.start();
    }

    private middlewares() {
        this.app.use(express.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(cors());
    }

    private routes() {
        this.app.use(
            '/api/v1/task',
            insertTaskRoute,
            deleteTaskRoute,
            updateTaskRoute,
            findTaskRoute,
            doneTaskRoute,
            archiveTaskRoute,
        );
    }

    private async start() {
        await mongoose
            .connect(process.env.DB_URL as string)
            .then(() =>
                this.app.listen(process.env.PORT || 8080, () => {
                    console.log('Application is running');
                }),
            )
            .catch((error) => {
                throw new Error((error as Error).message);
            });
    }
}
