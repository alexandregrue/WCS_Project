"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJWT = void 0;
const JWT = require('jsonwebtoken');
function createJWT(userEmail) {
    const SECRET_KEY = process.env.JWT_SECRET_KEY || '';
    return JWT.sign({ email: userEmail }, SECRET_KEY, { expiresIn: '2h' });
}
exports.createJWT = createJWT;
//# sourceMappingURL=jwt.service.js.map