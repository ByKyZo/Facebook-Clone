"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/user.model"));
const utils_1 = require("../utils/utils");
const mongoose_1 = require("mongoose");
const fs_1 = __importDefault(require("fs"));
class UserSocketController {
    /**
     *
     */
    static reactPost(userID, postID, reaction) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!mongoose_1.isValidObjectId(userID) || !mongoose_1.isValidObjectId(postID)) {
                throw new Error('reactPost() -> Invalid object id');
            }
            yield user_model_1.default.updateOne({ _id: userID, posts: { $elemMatch: { _id: postID } } }, {
                $inc: { [`posts.$.reactions.${reaction}`]: 1 },
            });
        });
    }
    /**
     *
     */
    static commentPost(userID, postID, message, attachment) {
        return __awaiter(this, void 0, void 0, function* () {
            let attachmentPath = undefined;
            let genericFileType = undefined;
            if (attachment) {
                if (!attachment.data.nbFilesSended || attachment.data.nbFilesSended > 1) {
                    fs_1.default.unlinkSync(attachment.uploadDir);
                    throw new Error('commentPost() -> Too many files sended (1 max)');
                }
                attachmentPath = utils_1.getUploadedFilePath(attachment.uploadDir, attachment.name);
                genericFileType = utils_1.getGenericFileType(attachment.mime);
            }
            if (!message && !attachment) {
                throw new Error('commentPost() -> Message and attachment empty');
            }
            if (!mongoose_1.isValidObjectId(userID) || !mongoose_1.isValidObjectId(postID)) {
                throw new Error('commentPost() -> Invalid object id');
            }
            const user = yield utils_1.parseMongooseDoc(yield user_model_1.default.findOneAndUpdate({ _id: userID, posts: { $elemMatch: { _id: postID } } }, {
                $push: {
                    'posts.$.comments': {
                        message,
                        attachment: { path: attachmentPath, genericFileType },
                    },
                },
            }, { new: true }));
            if (!user)
                throw new Error('commentPost() -> User not find');
            const commentedPostIndex = user.posts.findIndex((post) => post._id === postID);
            if (commentedPostIndex === -1)
                throw new Error('commentPost() -> CommentedPostIndex not find');
            return utils_1.getLastArrayElement(user.posts[commentedPostIndex].comments);
        });
    }
    /**
     *
     */
    static reactComment(userID, postID, commentID, reaction) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!mongoose_1.isValidObjectId(userID) || !mongoose_1.isValidObjectId(postID)) {
                throw new Error('reactPost() -> Invalid object id');
            }
            yield user_model_1.default.updateOne({ _id: userID, posts: { $elemMatch: { _id: postID } } }, {
                $inc: { [`posts.$.comments.$[comment].reactions.${reaction}`]: 1 },
            }, {
                arrayFilters: [{ 'comment._id': commentID }],
            });
        });
    }
    /**
     *
     */
    static replyComment(userID, postID, commentID, message, attachment) {
        return __awaiter(this, void 0, void 0, function* () {
            let attachmentPath = undefined;
            let genericFileType = undefined;
            if (attachment) {
                if (!attachment.data.nbFilesSended || attachment.data.nbFilesSended > 1) {
                    fs_1.default.unlinkSync(attachment.uploadDir);
                    throw new Error('replyComment() -> Too many files sended (1 max)');
                }
                attachmentPath = utils_1.getUploadedFilePath(attachment.uploadDir, attachment.name);
                genericFileType = utils_1.getGenericFileType(attachment.mime);
            }
            if (!message && !attachment) {
                throw new Error('commentPost() -> Message and attachment empty');
            }
            if (!mongoose_1.isValidObjectId(userID) || !mongoose_1.isValidObjectId(postID)) {
                throw new Error('replyComment() -> Invalid object id');
            }
            const user = utils_1.parseMongooseDoc(yield user_model_1.default.findOneAndUpdate({ _id: userID, posts: { $elemMatch: { _id: postID } } }, {
                $push: {
                    [`posts.$.comments.$[comment].replies`]: {
                        message,
                        attachment: { path: attachmentPath, genericFileType },
                    },
                },
            }, {
                arrayFilters: [{ 'comment._id': commentID }],
                new: true,
            }));
            if (!user)
                throw new Error('replyComment() -> User not find');
            const postIndex = user.posts.findIndex((post) => post._id === postID);
            if (postIndex === -1)
                throw new Error('replyComment() -> postIndex not find');
            const commentIndex = user.posts[postIndex].comments.findIndex((comment) => comment._id === commentID);
            if (commentIndex === -1)
                throw new Error('replyComment() -> commentIndex not find');
            return utils_1.getLastArrayElement(user.posts[postIndex].comments[commentIndex].replies);
        });
    }
    /**
     *
     */
    static reactReply(userID, postID, commentID, replyID, reaction) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO Rajouter la verif sur les autres args
            if (!mongoose_1.isValidObjectId(userID) || !mongoose_1.isValidObjectId(postID)) {
                throw new Error('reactPost() -> Invalid object id');
            }
            yield user_model_1.default.updateOne({ _id: userID, posts: { $elemMatch: { _id: postID } } }, {
                $inc: {
                    [`posts.$.comments.$[comment].replies.$[replies].reactions.${reaction}`]: 1,
                },
            }, {
                arrayFilters: [{ 'comment._id': commentID }, { 'replies._id': replyID }],
            });
        });
    }
}
exports.default = UserSocketController;
