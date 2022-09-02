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
const jwt_service_1 = require("../services/jwt.service");
const prisma = new client_1.PrismaClient();
exports.default = {
    auth: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const user = yield prisma.user.findUnique({
                where: {
                    email,
                },
            });
            if (!user)
                res.status(401).send('User not found');
            else {
                (0, password_service_1.verifyPasswords)(password, user.password).then((passwordIsCorrect) => {
                    if (passwordIsCorrect) {
                        const token = (0, jwt_service_1.createJWT)(email);
                        res.cookie('user_token', token);
                        res.send();
                    }
                    else
                        res.status(401).send('Password is incorrect');
                });
            }
        });
    },
};
//# sourceMappingURL=auth.controller.js.map