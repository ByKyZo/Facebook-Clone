export interface FileInfo<T = any> {
    name: string;
    size: number;
    path: string;
    wrote: number;
    uploadDir: string;
    data: T;
    mime: string;
    estimated: number;
    uploadId: string;
    originalFileName: string;
}

export interface FileInfoData {
    nbFilesSended: number;
    userID: string;
}
