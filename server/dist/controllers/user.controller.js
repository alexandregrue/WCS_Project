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
const bcrypt = require('bcrypt');
const password_service_1 = require("../services/password.service");
const prisma = new client_1.PrismaClient();
exports.default = {
    findAll: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield prisma.user.findMany();
            res.json(users);
        });
    },
    findOne: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma.user.findUnique({
                where: {
                    id: Number(req.params.id),
                },
            });
            res.json(user);
        });
    },
    create: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, firstname, lastname, password } = req.body;
            const hash = yield (0, password_service_1.hashPassword)(password);
            const newUser = yield prisma.user.create({
                data: {
                    email,
                    firstname,
                    lastname,
                    password: hash,
                    userRole: 'USER'
                },
            });
            res.json(newUser);
        });
    },
    update: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, firstname, lastname, password } = req.body;
            const updatedUser = yield prisma.user.update({
                where: {
                    id: Number(req.params.id),
                },
                data: {
                    email,
                    firstname,
                    lastname,
                    password,
                },
            });
            res.json(updatedUser);
        });
    },
    delete: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedUser = yield prisma.user.delete({
                where: {
                    id: Number(req.params.id),
                }
            });
            res.json(deletedUser);
        });
    }
};
//# sourceMappingURL=user.controller.js.map