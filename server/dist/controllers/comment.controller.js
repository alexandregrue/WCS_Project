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
            const comments = yield prisma.comment.findMany();
            res.json(comments);
        });
    },
    findOne: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params.id);
            const comment = yield prisma.comment.findUnique({
                where: {
                    id: Number(req.params.id),
                },
            });
            res.json(comment);
        });
    },
    create: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { content } = req.body;
            const newComment = yield prisma.comment.create({
                data: {
                    content,
                    userId: Number(req.params.userId),
                    taskId: Number(req.params.taskId),
                },
            });
            res.json(newComment);
        });
    },
    update: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { content } = req.body;
            const updatedComment = yield prisma.comment.update({
                where: {
                    id: Number(req.params.id),
                },
                data: {
                    content,
                },
            });
            res.json(updatedComment);
        });
    },
    delete: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedComment = yield prisma.comment.delete({
                where: {
                    id: Number(req.params.id),
                }
            });
            res.json(deletedComment);
        });
    }
};
//# sourceMappingURL=comment.controller.js.map