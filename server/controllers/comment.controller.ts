import { PrismaClient } from '@prisma/client'
import {Request, Response} from "express";

const prisma = new PrismaClient()

export default {

    findAll: async function (req: Request, res: Response) {
        const comments = await prisma.comment.findMany();
        res.json(comments)
    },

    findOne: async function (req: Request, res: Response) {
        console.log(req.params.id)
        const comment = await prisma.comment.findUnique({
            where: {
                id: Number(req.params.id),
            },
        })
        res.json(comment)
    },

    create: async function (req: Request, res: Response) {
        const {content} = req.body;
        const newComment = await prisma.comment.create({
            data: {
                content,
                userId: Number(req.params.userId),
                taskId: Number(req.params.taskId),
            },
        });
        res.json(newComment)
    },

    update: async function (req: Request, res: Response) {
        const {content} = req.body;
        const updatedComment = await prisma.comment.update({
            where: {
                id: Number(req.params.id),
            },
            data: {
                content,
            },
        });
        res.json(updatedComment)
    },

    delete: async function (req: Request, res: Response) {
        const deletedComment = await prisma.comment.delete({
            where: {
                id: Number(req.params.id),
            }
        });
        res.json(deletedComment)
    }
}
