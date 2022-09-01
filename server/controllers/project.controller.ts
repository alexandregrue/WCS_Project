import { PrismaClient } from '@prisma/client'
import {Request, Response} from "express";

const prisma = new PrismaClient()

export default {

    findAll: async function (req: Request, res: Response) {
        const projects = await prisma.project.findMany();
        res.json(projects)
    },

    findOne: async function (req: Request, res: Response) {
        console.log(req.params.id)
        const project = await prisma.project.findUnique({
            where: {
                id: Number(req.params.id),
            },
        })
        res.json(project)
    },

    create: async function (req: Request, res: Response) {
        const {name, timeEstimation, beginningDate, durationTime} = req.body;
        const organizationId = Number(req.params.organizationId)
        const newProject = await prisma.project.create({
            data: {
                name,
                timeEstimation,
                beginningDate,
                durationTime,
                organizationId
            },
        });
        res.json(newProject)
    },

    update: async function (req: Request, res: Response) {
        const {name, timeEstimation, beginningDate, durationTime} = req.body;
        const updatedProject = await prisma.project.update({
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
        res.json(updatedProject)
    },

    delete: async function (req: Request, res: Response) {
        const deletedProject = await prisma.project.delete({
            where: {
                id: Number(req.params.id),
            }
        });
        res.json(deletedProject)
    }
}
