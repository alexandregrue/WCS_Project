import { PrismaClient } from '@prisma/client'
import { Request, Response } from "express";
const bcrypt = require('bcrypt');
import { hashPassword } from '../services/password.service';


const prisma = new PrismaClient()

export default {

    findAll: async function (req: Request, res: Response) {
        const users = await prisma.user.findMany();
        res.json(users)
    },

    findOne: async function (req: Request, res: Response) {
        const user = await prisma.user.findUnique({
            where: {
                id: Number(req.params.id),
            },
        })
        res.json(user)
    },

    create: async function (req: Request, res: Response) {
        const {email, firstname, lastname, password} = req.body;
        const hash = await hashPassword(password);
        const newUser = await prisma.user.create({
            data: {
                email,
                firstname,
                lastname,
                password: hash,
                userRole: 'USER'
            },
        });
        res.json(newUser)
    },

    update: async function (req: Request, res: Response) {
        const {email, firstname, lastname, password} = req.body;
        const updatedUser = await prisma.user.update({
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
        res.json(updatedUser)
    },

    delete: async function (req: Request, res: Response) {
        const deletedUser = await prisma.user.delete({
            where: {
                id: Number(req.params.id),
            }
        });
        res.json(deletedUser)
    }
}
