import { PrismaClient } from '@prisma/client'
import {Request, Response} from "express";

const prisma = new PrismaClient()

export default {

    findAll: async function (req: Request, res: Response) {
        const tasks = await prisma.task.findMany();
        res.json(tasks)
    },

    findOne: async function (req: Request, res: Response) {
        console.log(req.params.id)
        const task = await prisma.task.findUnique({
            where: {
                id: Number(req.params.id),
            },
        })
        res.json(task)
    },

    create: async function (req: Request, res: Response) {
        const {title, description, timeEstimation, beginningDate, durationTime} = req.body;
        const projectId = Number(req.params.projectId)
        const newTask = await prisma.task.create({
            data: {
                title,
                description,
                timeEstimation,
                beginningDate,
                durationTime,
                projectId
            },
        });
        res.json(newTask)
    },

    update: async function (req: Request, res: Response) {
        const {title, description, timeEstimation, beginningDate, durationTime} = req.body;
        const updatedTask = await prisma.task.update({
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
        res.json(updatedTask)
    },

    delete: async function (req: Request, res: Response) {
        const deletedTask = await prisma.task.delete({
            where: {
                id: Number(req.params.id),
            }
        });
        res.json(deletedTask)
    }
}
