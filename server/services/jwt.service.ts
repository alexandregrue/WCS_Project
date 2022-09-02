const JWT = require('jsonwebtoken');

export function createJWT(userEmail: any): string {
    const SECRET_KEY: string = process.env.JWT_SECRET_KEY || '';
    return JWT.sign({email: userEmail}, SECRET_KEY, { expiresIn: '2h' });
}

