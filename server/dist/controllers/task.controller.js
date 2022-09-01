"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.default = {
    findAll: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tasks = yield prisma.task.findMany();
            res.json(tasks);
        });
    },
    findOne: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params.id);
            const task = yield prisma.task.findUnique({
                where: {
                    id: Number(req.params.id),
                },
            });
            res.json(task);
        });
    },
    create: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, description, timeEstimation, beginningDate, durationTime } = req.body;
            const projectId = Number(req.params.projectId);
            const newTask = yield prisma.task.create({
                data: {
                    title,
                    description,
                    timeEstimation,
                    beginningDate,
                    durationTime,
                    projectId
                },
            });
            res.json(newTask);
        });
    },
    update: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, description, timeEstimation, beginningDate, durationTime } = req.body;
            const updatedTask = yield prisma.task.update({
                where: {
                    id: Number(req.params.id),
                },
                data: {
                    title,
                    description,
                    timeEstimation,
                    beginningDate,
                    durationTime
                },
            });
            res.json(updatedTask);
        });
    },
    delete: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedTask = yield prisma.task.delete({
                where: {
                    id: Number(req.params.id),
                }
            });
            res.json(deletedTask);
        });
    }
};
//# sourceMappingURL=task.controller.js.map