import jwt, { Secret } from 'jsonwebtoken';

export default class JwtHandler {
    static createToken(payload: any) {
        const maxAge = 3 * 24 * 60 * 60 * 1000;
        return jwt.sign(payload, process.env.SECRET_TOKEN as Secret, {
            expiresIn: maxAge,
        });
    }

    static verifyToken() {}

    public static getUserByToken() {}
}
