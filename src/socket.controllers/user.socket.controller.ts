import UserModel from '../models/user.model';
import { isEmpty } from '../utils/utils';
import { isValidObjectId } from 'mongoose';
import FileHandler from '../utils/fileHandler';

export default class UserSocketController {
    // TODO IMPORTANT REMETTRE UN ARRAY ATTACHMENT
    // TODO GERER LES MIMETYPES
    // TODO Une fois que tout fonctionne faire une fonction en dehors pour gerer les upload avec buffer
    // public static async addPost(userID: string, message?: string, attachments?: any) {
    //     if (!isValidObjectId(userID)) throw new Error('Invalid user id');
    //
    //     if (!message && isEmpty(attachments)) throw new Error('Message and attachment empty');
    //
    //     console.log(attachments);
    //
    //     try {
    //         const pipelinee = promisify(pipeline);
    //
    //         const stream = new Readable({
    //             read() {
    //                 this.push(attachments.buffer);
    //                 this.push(null);
    //             },
    //         });
    //
    //         await pipelinee(stream, fs.createWriteStream('dist/upload/' + attachments.fileName));
    //     } catch (err) {
    //         console.log(err.message);
    //     }
    //
    //     return 'add post successfully';
    //     // return UserModel.findByIdAndUpdate(userID, {
    //     //     $push: {
    //     //         posts: {
    //     //             message,
    //     //             // photos,
    //     //             // videos,
    //     //         },
    //     //     },
    //     // });
    // }
}
