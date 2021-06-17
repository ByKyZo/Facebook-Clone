import { promisify } from 'util';
import { pipeline } from 'stream';
import path from 'path';
import fs from 'fs';

export interface IFileUploadedInfo {
    fileName: string;
    genericFileType: string;
}

export default class FileHandler {
    public static async uploadPictureAndVideos(
        label: string,
        file: any
    ): Promise<IFileUploadedInfo> {
        const pipelinee = promisify(pipeline);
        const cleanLabel: string = label.replace(' ', '');
        let genericFileType: string = '';
        let fileName: string = '';
        let uploadFilePath: string = '';
        // JPG, PNG, GIF, TIFF, HEIF ou WebP
        if (
            file.detectedMimeType === 'image/jpg' ||
            file.detectedMimeType === 'image/jpeg' ||
            file.detectedMimeType === 'image/png' ||
            file.detectedMimeType === 'image/gif' ||
            file.detectedMimeType === 'image/webp'
        ) {
            fileName = `${cleanLabel}${Math.floor(Math.random() * 1000)}${Date.now()}${
                file.detectedFileExtension
            }`;
            uploadFilePath = path.join(__dirname, '..', 'upload', 'images', fileName);
            genericFileType = 'image';
        } else if (
            file.detectedMimeType === 'video/mp4' ||
            file.detectedMimeType === 'video/MP2T' ||
            file.detectedMimeType === 'video/quicktime'
        ) {
            fileName = `${cleanLabel}${Math.floor(Math.random() * 1000)}${Date.now()}${
                file.detectedFileExtension
            }`;
            uploadFilePath = path.join(__dirname, '..', 'upload', 'videos', fileName);
            genericFileType = 'video';
        } else {
            throw Error('INVALID_TYPE : File must be of type png / jpg / jpeg / mp4');
        }

        await pipelinee(file.stream, fs.createWriteStream(uploadFilePath));

        return {
            fileName,
            genericFileType,
        };
    }
}
