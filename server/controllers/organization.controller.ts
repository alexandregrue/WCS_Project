import { PrismaClient } from '@prisma/client'
import {Request, Response} from "express";

const prisma = new PrismaClient()

export default {

    findAll: async function (req: Request, res: Response) {
        const organizations = await prisma.organization.findMany();
        res.json(organizations)
    },

    findOne: async function (req: Request, res: Response) {
        console.log(req.params.id)
        const organization = await prisma.organization.findUnique({
            where: {
                id: Number(req.params.id),
            },
        })
        res.json(organization)
    },

    create: async function (req: Request, res: Response) {
        const {name} = req.body;
        const newOrganizations = await prisma.organization.create({
            data: {
                name,
            },
        });
        const newOrganizationsUsers = await prisma.organizationsUsers.create({
            data: {
                organizationId: newOrganizations.id,
                userId: Number(req.params.userId),
                roleInOrganization: "ADMIN"
            },
        });
        res.json(newOrganizations)
    },


    update: async function (req: Request, res: Response) {
        const {name} = req.body;
        const updatedTask = await prisma.organization.update({
            where: {
                id: Number(req.params.id),
            },
            data: {
                name
            },
        });
        res.json(updatedTask)
    },

    delete: async function (req: Request, res: Response) {
        const deletedTask = await prisma.organization.delete({
            where: {
                id: Number(req.params.id),
            }
        });
        res.json(deletedTask)
    }
}
