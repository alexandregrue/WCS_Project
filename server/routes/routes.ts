import { Express } from "express";
import usersRouter from './user.route';
import tasksRouter from './task.route';
import projectRouter from './project.route';


const setupRoutes = (app: Express) => {
    app.use('/api/users', usersRouter);
    app.use('/api/tasks', tasksRouter);
    app.use('/api/projects', projectRouter);


};

export default setupRoutes;
