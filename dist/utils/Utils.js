"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGenericFileType = exports.getUploadedFilePath = exports.getLastArrayElement = exports.parseMongooseDoc = exports.isEmpty = void 0;
const path_1 = __importDefault(require("path"));
const isEmpty = (value) => {
    return (value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0));
};
exports.isEmpty = isEmpty;
const parseMongooseDoc = (arg) => {
    return JSON.parse(JSON.stringify(arg));
};
exports.parseMongooseDoc = parseMongooseDoc;
const getLastArrayElement = (array) => {
    return array.slice(-1)[0];
};
exports.getLastArrayElement = getLastArrayElement;
const getUploadedFilePath = (uploadDirPath, name) => {
    return path_1.default.join(path_1.default.basename(path_1.default.dirname(uploadDirPath)), name);
};
exports.getUploadedFilePath = getUploadedFilePath;
const getGenericFileType = (mimetype) => {
    if (mimetype === 'image/jpg' ||
        mimetype === 'image/jpeg' ||
        mimetype === 'image/png' ||
        mimetype === 'image/gif' ||
        mimetype === 'image/webp')
        return 'image';
    else if (mimetype === 'video/mp4' ||
        mimetype === 'video/MP2T' ||
        mimetype === 'video/quicktime')
        return 'video';
    throw new Error('Invalid mimetype');
};
exports.getGenericFileType = getGenericFileType;
