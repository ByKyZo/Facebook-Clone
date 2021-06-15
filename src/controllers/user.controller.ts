import UserModel, { IUser } from '../models/User.model';
import { Request } from 'express';
import { Response } from 'express/ts4.0';
import { isValidObjectId } from 'mongoose';

export default class UserController {
    public static async getUser(req: Request, res: Response) {
        const userID = req.params.id;

        try {
            if (!isValidObjectId(userID)) {
                console.log('invalid user id');
                res.send(400);
                return;
            }

            const user = await UserModel.findById(req.params.id).select('-password');

            res.status(200).send(user);
        } catch (err) {
            console.log(err.message);

            res.send(500);
        }
    }
}
