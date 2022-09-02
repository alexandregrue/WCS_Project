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
            const organizations = yield prisma.organization.findMany();
            res.json(organizations);
        });
    },
    findOne: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params.id);
            const organization = yield prisma.organization.findUnique({
                where: {
                    id: Number(req.params.id),
                },
            });
            res.json(organization);
        });
    },
    create: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = req.body;
            const newOrganizations = yield prisma.organization.create({
                data: {
                    name,
                },
            });
            const newOrganizationsUsers = yield prisma.organizationsUsers.create({
                data: {
                    organizationId: newOrganizations.id,
                    userId: Number(req.params.userId),
                    roleInOrganization: "ADMIN"
                },
            });
            res.json(newOrganizations);
        });
    },
    update: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = req.body;
            const updatedTask = yield prisma.organization.update({
                where: {
                    id: Number(req.params.id),
                },
                data: {
                    name
                },
            });
            res.json(updatedTask);
        });
    },
    delete: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedTask = yield prisma.organization.delete({
                where: {
                    id: Number(req.params.id),
                }
            });
            res.json(deletedTask);
        });
    }
};
//# sourceMappingURL=organization.controller.js.map