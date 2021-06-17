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
const util_1 = require("util");
const stream_1 = require("stream");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
class FileHandler {
    static uploadPictureAndVideos(label, file) {
        return __awaiter(this, void 0, void 0, function* () {
            const pipelinee = util_1.promisify(stream_1.pipeline);
            const cleanLabel = label.replace(' ', '');
            let genericFileType = '';
            let fileName = '';
            let uploadFilePath = '';
            // JPG, PNG, GIF, TIFF, HEIF ou WebP
            if (file.detectedMimeType === 'image/jpg' ||
                file.detectedMimeType === 'image/jpeg' ||
                file.detectedMimeType === 'image/png' ||
                file.detectedMimeType === 'image/gif' ||
                file.detectedMimeType === 'image/webp') {
                fileName = `${cleanLabel}${Math.floor(Math.random() * 1000)}${Date.now()}${file.detectedFileExtension}`;
                uploadFilePath = path_1.default.join(__dirname, '..', 'upload', 'images', fileName);
                genericFileType = 'image';
            }
            else if (file.detectedMimeType === 'video/mp4' ||
                file.detectedMimeType === 'video/MP2T' ||
                file.detectedMimeType === 'video/quicktime') {
                fileName = `${cleanLabel}${Math.floor(Math.random() * 1000)}${Date.now()}${file.detectedFileExtension}`;
                uploadFilePath = path_1.default.join(__dirname, '..', 'upload', 'videos', fileName);
                genericFileType = 'video';
            }
            else {
                throw Error('INVALID_TYPE : File must be of type png / jpg / jpeg / mp4');
            }
            yield pipelinee(file.stream, fs_1.default.createWriteStream(uploadFilePath));
            return {
                fileName,
                genericFileType,
            };
        });
    }
}
exports.default = FileHandler;
