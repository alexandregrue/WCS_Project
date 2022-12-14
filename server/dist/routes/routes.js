"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_route_1 = __importDefault(require("./user.route"));
const task_route_1 = __importDefault(require("./task.route"));
const project_route_1 = __importDefault(require("./project.route"));
const comment_route_1 = __importDefault(require("./comment.route"));
const organization_route_1 = __importDefault(require("./organization.route"));
const auth_route_1 = __importDefault(require("./auth.route"));
const setupRoutes = (app) => {
    app.use('/api/users', user_route_1.default);
    app.use('/api/tasks', task_route_1.default);
    app.use('/api/projects', project_route_1.default);
    app.use('/api/comments', comment_route_1.default);
    app.use('/api/organizations', organization_route_1.default);
    app.use('/api/auth', auth_route_1.default);
};
exports.default = setupRoutes;
//# sourceMappingURL=routes.js.map