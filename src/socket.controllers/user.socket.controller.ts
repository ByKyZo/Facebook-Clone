import UserModel from '../models/user.model';
import {
    getUploadedFilePath,
    getLastArrayElement,
    parseMongooseDoc,
    getGenericFileType,
} from '../utils/utils';
import { isValidObjectId } from 'mongoose';
import { FileInfo, FileInfoData } from '../types';
import fs from 'fs';

export default class UserSocketController {
    /**
     *
     */
    static async reactPost(userID: string, postID: string, reaction: string) {
        if (!isValidObjectId(userID) || !isValidObjectId(postID)) {
            throw new Error('reactPost() -> Invalid object id');
        }

        await UserModel.updateOne(
            { _id: userID, posts: { $elemMatch: { _id: postID } } },
            {
                $inc: { [`posts.$.reactions.${reaction}`]: 1 },
            }
        );
    }
    /**
     *
     */
    static async commentPost(
        userID: string,
        postID: string,
        message: string,
        attachment: FileInfo<FileInfoData>
    ) {
        let attachmentPath = undefined;
        let genericFileType = undefined;

        if (attachment) {
            if (!attachment.data.nbFilesSended || attachment.data.nbFilesSended > 1) {
                fs.unlinkSync(attachment.uploadDir);
                throw new Error('commentPost() -> Too many files sended (1 max)');
            }
            attachmentPath = getUploadedFilePath(attachment.uploadDir, attachment.name);
            genericFileType = getGenericFileType(attachment.mime);
        }

        if (!message && !attachment) {
            throw new Error('commentPost() -> Message and attachment empty');
        }

        if (!isValidObjectId(userID) || !isValidObjectId(postID)) {
            throw new Error('commentPost() -> Invalid object id');
        }

        const user = await parseMongooseDoc(
            await UserModel.findOneAndUpdate(
                { _id: userID, posts: { $elemMatch: { _id: postID } } },
                {
                    $push: {
                        'posts.$.comments': {
                            message,
                            attachment: { path: attachmentPath, genericFileType },
                        },
                    },
                },
                { new: true }
            )
        );

        if (!user) throw new Error('commentPost() -> User not find');

        const commentedPostIndex = user.posts.findIndex((post) => post._id === postID);

        if (commentedPostIndex === -1)
            throw new Error('commentPost() -> CommentedPostIndex not find');

        return getLastArrayElement(user.posts[commentedPostIndex].comments);
    }
    /**
     *
     */
    static async reactComment(userID: string, postID: string, commentID: string, reaction: string) {
        if (!isValidObjectId(userID) || !isValidObjectId(postID)) {
            throw new Error('reactPost() -> Invalid object id');
        }

        await UserModel.updateOne(
            { _id: userID, posts: { $elemMatch: { _id: postID } } },
            {
                $inc: { [`posts.$.comments.$[comment].reactions.${reaction}`]: 1 },
            },
            {
                arrayFilters: [{ 'comment._id': commentID }],
            }
        );
    }
    /**
     *
     */
    static async replyComment(
        userID: string,
        postID: string,
        commentID: string,
        message: string,
        attachment?: FileInfo<FileInfoData>
    ) {
        let attachmentPath = undefined;
        let genericFileType = undefined;

        if (attachment) {
            if (!attachment.data.nbFilesSended || attachment.data.nbFilesSended > 1) {
                fs.unlinkSync(attachment.uploadDir);
                throw new Error('replyComment() -> Too many files sended (1 max)');
            }
            attachmentPath = getUploadedFilePath(attachment.uploadDir, attachment.name);
            genericFileType = getGenericFileType(attachment.mime);
        }

        if (!message && !attachment) {
            throw new Error('commentPost() -> Message and attachment empty');
        }

        if (!isValidObjectId(userID) || !isValidObjectId(postID)) {
            throw new Error('replyComment() -> Invalid object id');
        }

        const user = parseMongooseDoc(
            await UserModel.findOneAndUpdate(
                { _id: userID, posts: { $elemMatch: { _id: postID } } },
                {
                    $push: {
                        [`posts.$.comments.$[comment].replies`]: {
                            message,
                            attachment: { path: attachmentPath, genericFileType },
                        },
                    },
                },
                {
                    arrayFilters: [{ 'comment._id': commentID }],
                    new: true,
                }
            )
        );

        if (!user) throw new Error('replyComment() -> User not find');

        const postIndex = user.posts.findIndex((post) => post._id === postID);

        if (postIndex === -1) throw new Error('replyComment() -> postIndex not find');

        const commentIndex = user.posts[postIndex].comments.findIndex(
            (comment) => comment._id === commentID
        );

        if (commentIndex === -1) throw new Error('replyComment() -> commentIndex not find');

        return getLastArrayElement(user.posts[postIndex].comments[commentIndex].replies);
    }
    /**
     *
     */
    static async reactReply(
        userID: string,
        postID: string,
        commentID: string,
        replyID: string,
        reaction: string
    ) {
        // TODO Rajouter la verif sur les autres args
        if (!isValidObjectId(userID) || !isValidObjectId(postID)) {
            throw new Error('reactPost() -> Invalid object id');
        }

        await UserModel.updateOne(
            { _id: userID, posts: { $elemMatch: { _id: postID } } },
            {
                $inc: {
                    [`posts.$.comments.$[comment].replies.$[replies].reactions.${reaction}`]: 1,
                },
            },
            {
                arrayFilters: [{ 'comment._id': commentID }, { 'replies._id': replyID }],
            }
        );
    }
}
