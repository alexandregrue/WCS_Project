import { PrismaClient } from '@prisma/client'
import { Request, Response } from "express";
const bcrypt = require('bcrypt');
import {hashPassword, verifyPasswords} from '../services/password.service';
import {createJWT} from '../services/jwt.service';



const prisma = new PrismaClient()

export default {

    auth: async function (req: Request, res: Response) {
        const {email, password} = req.body;
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        })

        if (!user) res.status(401).send('User not found');
        else {
            verifyPasswords(password, user.password).then(
                (passwordIsCorrect) => {
                    if (passwordIsCorrect) {
                        const token = createJWT(email);
                        res.cookie('user_token', token)
                        res.send()
                    }
                    else res.status(401).send('Password is incorrect');
                }
            );
        }
    },
}
