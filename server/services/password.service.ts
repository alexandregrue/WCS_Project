const bcrypt = require('bcrypt');

export async function hashPassword(password: string): Promise<string | any> {
    const saltRounds: number = 10;
    try {
        return await bcrypt.hash(password, saltRounds);
    } catch (error) {
        console.error(error);
        return error;
    }
}

export async function verifyPasswords(bodyPassword: string, dbHash: string): Promise<boolean | any> {
    try {
        return await bcrypt.compare(bodyPassword, dbHash);
    } catch (error) {
        console.error(error);
        return error;
    }
}

