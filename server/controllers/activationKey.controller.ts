import { PrismaClient } from '@prisma/client'
import {Request, Response} from "express";

const prisma = new PrismaClient()

export default {

    findAll: async function (req: Request, res: Response) {
        const activationKeys = await prisma.activationKey.findMany();
        res.json(activationKeys)
    },

    findOne: async function (req: Request, res: Response) {
        console.log(req.params.id)
        const activationKey = await prisma.activationKey.findUnique({
            where: {
                id: Number(req.params.id),
            },
        })
        res.json(activationKey)
    },

    create: async function (req: Request, res: Response) {
        const {userEmail} = req.body;
        const expirationDate = new Date('now + 30 days')
        const newActivationKey = await prisma.activationKey.create({
            data: {
                userEmail,
                expirationDate,
                organizationId: Number(req.params.organizationId),
                userId: Number(req.params.userId),
            },
        });
        res.json(newActivationKey)
    },

    delete: async function (req: Request, res: Response) {
        const deletedActivationKey = await prisma.activationKey.delete({
            where: {
                id: Number(req.params.id),
            }
        });
        res.json(deletedActivationKey)
    }
}
