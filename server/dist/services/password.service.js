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
exports.verifyPasswords = exports.hashPassword = void 0;
const bcrypt = require('bcrypt');
function hashPassword(password) {
    return __awaiter(this, void 0, void 0, function* () {
        const saltRounds = 10;
        try {
            return yield bcrypt.hash(password, saltRounds);
        }
        catch (error) {
            console.error(error);
            return error;
        }
    });
}
exports.hashPassword = hashPassword;
function verifyPasswords(bodyPassword, dbHash) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield bcrypt.compare(bodyPassword, dbHash);
        }
        catch (error) {
            console.error(error);
            return error;
        }
    });
}
exports.verifyPasswords = verifyPasswords;
//# sourceMappingURL=password.service.js.map