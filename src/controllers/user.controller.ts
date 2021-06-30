import UserModel, { IUser, IUserPost } from '../models/user.model';
import { Request } from 'express';
import { Response } from 'express/ts4.0';
import { isValidObjectId } from 'mongoose';
import { getLastArrayElement, isEmpty } from '../utils/utils';
import FileHandler, { IFileUploadedInfo } from '../utils/fileHandler';

export default class UserController {
    public static async getUser(req: Request, res: Response) {
        const userID = req.params.id;

        try {
            if (!isValidObjectId(userID)) {
                console.log('getUser() -> Invalid Object id');
                res.sendStatus(400);
                return;
            }

            const user = (await UserModel.findById(req.params.id).select('-password')) as IUser;

            if (!user) {
                console.log('getUser() -> Empty user');
                res.sendStatus(400);
                return;
            }

            res.status(200).send(user);
        } catch (err) {
            console.log(err.message);

            res.sendStatus(500);
        }
    }

    public static async addPost(req: Request, res: Response) {
        const { userID, message } = req.body;
        const attachments = req.files;

        if (!isValidObjectId(userID)) {
            console.log(userID);
            console.log('addPost() -> Invalid Object id');
            res.sendStatus(400);
            return;
        }

        if (!message && isEmpty(attachments)) {
            console.log('addPost() -> Message and attachment empty');
            res.sendStatus(400);
            return;
        }

        try {
            let photos;
            let videos;

            if (!isEmpty(attachments)) {
                const filesNameUploaded: IFileUploadedInfo[] = [];
                for (let i = 0; i < attachments.length; i++) {
                    filesNameUploaded.push(
                        await FileHandler.uploadPictureAndVideos(
                            userID,
                            // @ts-ignore
                            attachments[i],
                            'posts'
                        )
                    );
                }

                photos = filesNameUploaded.filter((file) => file.genericFileType !== 'video');
                videos = filesNameUploaded.filter((file) => file.genericFileType !== 'image');
            }

            let user = (await UserModel.findByIdAndUpdate(
                userID,
                {
                    $push: {
                        posts: {
                            message,
                            photos,
                            videos,
                        },
                    },
                },
                { new: true }
            ).select('posts')) as IUser;

            if (!user) {
                console.log('addPost() -> User not find');
                res.sendStatus(404);
                return;
            }

            res.status(200).send(getLastArrayElement<IUserPost>(user.posts));
        } catch (err) {
            console.log(err.message);

            res.sendStatus(500);
        }
    }
}
