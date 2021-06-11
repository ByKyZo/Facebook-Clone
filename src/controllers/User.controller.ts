import UserModel, { IUser } from '../models/User.model';
import { Request } from 'express';
import { Response } from 'express/ts4.0';

export default class UserController {
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
            res.status(200).send('Sign Up successfully');
        } catch (err) {
            console.log(err.message);
            if (err.code === 11000) return res.sendStatus(409);
            res.sendStatus(500);
        }
    }

    public static async signin(req: Request, res: Response) {
        const { email, password } = req.body;

        try {
            if (!email || !password) return res.sendStatus(500);

            const userFindByEmail = await UserModel.findOne({ email });

            if (!userFindByEmail) return res.sendStatus(500);

            console.log(userFindByEmail);
        } catch (err) {
            console.log(err.message);
            res.sendStatus(500);
        }
        // console.log('LOGIN');
    }
}
