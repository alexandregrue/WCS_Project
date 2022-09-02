import { Express } from "express";
import usersRouter from './user.route';
import tasksRouter from './task.route';
import projectRouter from './project.route';
import commentRouter from "./comment.route";
import organizationRouter from "./organization.route";
import authRouter from "./auth.route";


const setupRoutes = (app: Express) => {
    app.use('/api/users', usersRouter);
    app.use('/api/tasks', tasksRouter);
    app.use('/api/projects', projectRouter);
    app.use('/api/comments', commentRouter);
    app.use('/api/organizations', organizationRouter);
    app.use('/api/auth', authRouter);
};

export default setupRoutes;
