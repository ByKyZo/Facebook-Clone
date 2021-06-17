import UserModel, { IUser } from '../models/user.model';
import { Request } from 'express';
import { Response } from 'express/ts4.0';
import bcrypt from 'bcrypt';
import * as Mongoose from 'mongoose';
import jwtHandler from '../utils/jwtHandler';
import jwt from 'jsonwebtoken';

export default class AuthController {
    public static async signup(req: Request, res: Response) {
        const { firstName, lastName, email, password, birthday, gender } = req.body;

        try {
            await UserModel.create({
                firstName,
                lastName,
                email,
                password,
                birthday,
                gender,
            });
            res.status(201).send('Sign Up successfully');
        } catch (err) {
            console.log(err.message);
            if (err.code === 11000) return res.sendStatus(409);
            res.sendStatus(500);
        }
    }

    public static async signin(req: Request, res: Response) {
        const { email, password } = req.body;

        try {
            if (!email || !password) {
                console.log('email or password empty');
                return res.sendStatus(400);
            }

            UserModel.findOne({ email }, (err: any, docs: Mongoose.Document) => {
                if (err || !docs) return res.sendStatus(500);

                const userFindByEmail = docs.toObject<IUser>();

                if (!userFindByEmail) {
                    console.log('email not exist');
                    return res.sendStatus(403);
                }

                const passwordHashed = userFindByEmail.password;

                Reflect.deleteProperty(userFindByEmail, 'password');

                bcrypt.compare(password, passwordHashed, (err, result) => {
                    if (err) {
                        console.log('compare password error', err);
                        return res.sendStatus(500);
                    }

                    if (!result) {
                        console.log('wrong password', result);
                        return res.sendStatus(403);
                    }

                    console.log('good password');

                    const token = jwtHandler.createToken({ user: userFindByEmail });

                    res.status(200).send({ token, user: userFindByEmail });
                });
            });
        } catch (err) {
            console.log(err.message);
            res.sendStatus(500);
        }
    }

    public static rememberMe(req: Request, res: Response) {
        if (!req.headers.authorization) return res.sendStatus(401);

        const token = req.headers.authorization.replace('Bearer', '').trim();

        try {
            const tokenDecoded: any = jwtHandler.verifyTokenAndDecode(token);

            if (!tokenDecoded) {
                console.log('remember me token invalid');
                res.sendStatus(400);
            }

            const newToken = jwtHandler.createToken({ user: tokenDecoded.user });

            console.log('remember me is good');

            res.status(200).send({ token: newToken, user: tokenDecoded.user });
        } catch (err) {
            console.log(err.message);
            res.sendStatus(500);
        }
    }
}
