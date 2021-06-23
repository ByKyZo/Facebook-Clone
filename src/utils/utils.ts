import path from 'path';

export const isEmpty = (value: any) => {
    return (
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
    );
};

export const parseMongooseDoc = <T>(arg: T): T => {
    return JSON.parse(JSON.stringify(arg));
};

export const getLastArrayElement = <T>(array: T[]): T => {
    return array.slice(-1)[0];
};

export const getUploadedFilePath = (uploadDirPath: string, name: string): string => {
    return path.join(path.basename(path.dirname(uploadDirPath)), name);
};

export const getGenericFileType = (mimetype: string): string => {
    if (
        mimetype === 'image/jpg' ||
        mimetype === 'image/jpeg' ||
        mimetype === 'image/png' ||
        mimetype === 'image/gif' ||
        mimetype === 'image/webp'
    )
        return 'image';
    else if (
        mimetype === 'video/mp4' ||
        mimetype === 'video/MP2T' ||
        mimetype === 'video/quicktime'
    )
        return 'video';
    throw new Error('Invalid mimetype');
};
