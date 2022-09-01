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
            const projects = yield prisma.project.findMany();
            res.json(projects);
        });
    },
    findOne: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params.id);
            const project = yield prisma.project.findUnique({
                where: {
                    id: Number(req.params.id),
                },
            });
            res.json(project);
        });
    },
    create: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, timeEstimation, beginningDate, durationTime } = req.body;
            const organizationId = Number(req.params.organizationId);
            const newProject = yield prisma.project.create({
                data: {
                    name,
                    timeEstimation,
                    beginningDate,
                    durationTime,
                    organizationId
                },
            });
            res.json(newProject);
        });
    },
    update: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, timeEstimation, beginningDate, durationTime } = req.body;
            const updatedProject = yield prisma.project.update({
                where: {
                    id: Number(req.params.id),
                },
                data: {
                    name,
                    timeEstimation,
                    beginningDate,
                    durationTime,
                },
            });
            res.json(updatedProject);
        });
    },
    delete: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedProject = yield prisma.project.delete({
                where: {
                    id: Number(req.params.id),
                }
            });
            res.json(deletedProject);
        });
    }
};
//# sourceMappingURL=project.controller.js.map