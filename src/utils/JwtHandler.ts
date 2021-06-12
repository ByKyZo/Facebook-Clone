import jwt, { Secret } from 'jsonwebtoken';

export default class JwtHandler {
    static createToken(payload: any) {
        const maxAge = 3 * 24 * 60 * 60 * 1000;
        return jwt.sign(payload, process.env.SECRET_TOKEN as Secret, {
            expiresIn: maxAge,
        });
    }
    static verifyTokenAndDecode(token: string): string | object {
        return jwt.verify(token, process.env.SECRET_TOKEN as Secret);
    }

    public static getUserByToken() {}
}
