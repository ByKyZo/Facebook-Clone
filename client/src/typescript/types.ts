/**
 * * USER TYPES
 * ? A completer
 */
export interface IUser {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    birthday: {
        day: string;
        month: string;
        year: string;
        format: string;
    };
    picture: IAttachment;
    cover: IAttachment;
    gender: string;
    posts: IUserPost[];
    notifications: string[]; // ? A definir
    friends: string[]; // ? A definir
    createdAt: Date;
    updateAt: Date;
    isAuth: boolean;
    isLoading: boolean;
}

export interface IUserComment extends IComment {
    replies: IComment[];
}

export interface IUserPost {
    _id: string;
    message: string;
    photos: IAttachment[];
    videos: IAttachment[];
    reactions: IReactions;
    comments: IUserComment[];
    createdAt: Date;
    updateAt: Date;
}

export interface IReactions {
    like: number;
    love: number;
    care: number;
    haha: number;
    wow: number;
    sad: number;
    angry: number;
}

export interface IComment {
    userID: string;
    reactions: IReactions;
    message: string;
    attachment: IAttachment;
}

export interface IAttachment {
    path: string;
    genericFileType: string;
}
/**
 * * END USER TYPES
 */
export interface IFileInfo {
    data: any;
    estimated: number;
    mime: string;
    name: string;
    originalFileName: string;
    size: number;
    uploadDir: string;
    uploadId: string;
}
