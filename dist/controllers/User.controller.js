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
const mongoose_1 = require("mongoose");
const utils_1 = require("../utils/utils");
const fileHandler_1 = __importDefault(require("../utils/fileHandler"));
class UserController {
    static getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userID = req.params.id;
            try {
                if (!mongoose_1.isValidObjectId(userID)) {
                    console.log('getUser() -> Invalid Object id');
                    res.sendStatus(400);
                    return;
                }
                const user = (yield user_model_1.default.findById(req.params.id).select('-password'));
                if (!user) {
                    console.log('getUser() -> Empty user');
                    res.sendStatus(400);
                    return;
                }
                res.status(200).send(user);
            }
            catch (err) {
                console.log(err.message);
                res.sendStatus(500);
            }
        });
    }
    static addPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userID, message } = req.body;
            const attachments = req.files;
            if (!mongoose_1.isValidObjectId(userID)) {
                console.log(userID);
                console.log('addPost() -> Invalid Object id');
                res.sendStatus(400);
                return;
            }
            if (!message && utils_1.isEmpty(attachments)) {
                console.log('addPost() -> Message and attachment empty');
                res.sendStatus(400);
                return;
            }
            try {
                const filesNameUploaded = [];
                for (let i = 0; i < attachments.length; i++) {
                    filesNameUploaded.push(yield fileHandler_1.default.uploadPictureAndVideos(userID, 
                    // @ts-ignore
                    attachments[i], 'posts'));
                }
                const photos = filesNameUploaded.filter((file) => file.genericFileType !== 'video');
                const videos = filesNameUploaded.filter((file) => file.genericFileType !== 'image');
                let user = (yield user_model_1.default.findByIdAndUpdate(userID, {
                    $push: {
                        posts: {
                            message,
                            photos,
                            videos,
                        },
                    },
                }, { new: true }).select('posts'));
                if (!user) {
                    console.log('addPost() -> User not find');
                    res.sendStatus(404);
                    return;
                }
                res.status(200).send(utils_1.getLastArrayElement(user.posts));
            }
            catch (err) {
                console.log(err.message);
                res.sendStatus(500);
            }
        });
    }
}
exports.default = UserController;
