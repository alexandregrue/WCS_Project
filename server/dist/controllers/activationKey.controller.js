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
            const activationKeys = yield prisma.activationKey.findMany();
            res.json(activationKeys);
        });
    },
    findOne: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params.id);
            const activationKey = yield prisma.activationKey.findUnique({
                where: {
                    id: Number(req.params.id),
                },
            });
            res.json(activationKey);
        });
    },
    create: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userEmail } = req.body;
            const expirationDate = new Date('now + 30 days');
            const newActivationKey = yield prisma.activationKey.create({
                data: {
                    userEmail,
                    expirationDate,
                    organizationId: Number(req.params.organizationId),
                    userId: Number(req.params.userId),
                },
            });
            res.json(newActivationKey);
        });
    },
    delete: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedActivationKey = yield prisma.activationKey.delete({
                where: {
                    id: Number(req.params.id),
                }
            });
            res.json(deletedActivationKey);
        });
    }
};
//# sourceMappingURL=activationKey.controller.js.map