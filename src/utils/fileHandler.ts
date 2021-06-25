import { promisify } from 'util';
import { pipeline } from 'stream';
import path from 'path';
import fs from 'fs';
import { getGenericFileType } from './utils';

export interface IFileUploadedInfo {
    fileName: string;
    genericFileType: string;
}

export default class FileHandler {
    public static async uploadPictureAndVideos(
        label: string,
        file: any,
        directory: string
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
            genericFileType = 'image';
        } else if (
            file.detectedMimeType === 'video/mp4' ||
            file.detectedMimeType === 'video/MP2T' ||
            file.detectedMimeType === 'video/quicktime'
        ) {
            genericFileType = 'video';
        } else {
            throw Error('Invalid file type : type png / jpg / jpeg / mp4 only');
        }

        fileName = `${cleanLabel}${Math.floor(Math.random() * 1000)}${Date.now()}${
            file.detectedFileExtension
        }`;

        uploadFilePath = path.join(__dirname, '..', 'upload', directory, fileName);

        await pipelinee(file.stream, fs.createWriteStream(uploadFilePath));

        fileName = `${directory}/${fileName}`;

        return {
            fileName,
            genericFileType,
        };
    }
}
