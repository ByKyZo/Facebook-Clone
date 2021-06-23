import mongoose from 'mongoose';
import { NextFunction } from 'express';
import bcrypt from 'bcrypt';
import * as Mongoose from 'mongoose';

// TODO RAJOUTER SHARE DANS PHOTO ET POST
// TODO RASSEMEBLE PHOTO EST POST

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
    attachment: {
        path: string;
        genericFileType: string;
    };
}

export interface IUserComment extends mongoose.Document {
    comment: IComment;
    replies: IComment[];
}

export interface IUserPost extends mongoose.Document {
    message: string;
    photos: string[];
    videos: string[];
    reactions: IReactions;
    comments: IUserComment[];

    createdAt: Date;
    updateAt: Date;
}

export interface IUser extends mongoose.Document {
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
    gender: string;
    posts: IUserPost[];
    notifications: string[];
    friends: string[];
    createdAt: Date;
    updateAt: Date;
}

const ReactionsSchemaTypes = {
    like: {
        type: Number,
        default: 0,
    },
    love: {
        type: Number,
        default: 0,
    },
    care: {
        type: Number,
        default: 0,
    },
    haha: {
        type: Number,
        default: 0,
    },
    wow: {
        type: Number,
        default: 0,
    },
    sad: {
        type: Number,
        default: 0,
    },
    angry: {
        type: Number,
        default: 0,
    },
};

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            maxlength: [20, 'First name must be contains maximum 20 characters'],
            required: [true, 'First name is required'],
        },
        lastName: {
            type: String,
            maxlength: [20, 'Last name must be contains maximum 20 characters'],
            required: [true, 'Last name is required'],
        },
        email: {
            type: String,
            unique: [true, 'Email already exists'],
            required: [true, 'Email is required'],
        },
        password: {
            type: String,
            minlength: [4, 'Password must be contains minimum 4 characters'],
            required: [true, 'Password is required'],
        },
        birthday: {
            day: {
                type: String,
                required: [true, 'Birthday day is required'],
            },
            month: {
                type: String,
                required: [true, 'Birthday month is required'],
            },
            year: {
                type: String,
                required: [true, 'Birthday year is required'],
            },
            format: {
                type: String,
                required: [true, 'Birthday format is required'],
            },
        },
        gender: {
            type: String,
            required: [true, 'Gender is required'],
        },
        posts: [
            new mongoose.Schema(
                {
                    message: {
                        type: String,
                    },
                    photos: [
                        {
                            fileName: {
                                type: String,
                            },
                            genericFileType: {
                                type: String,
                                enum: ['image', 'video'],
                            },
                        },
                    ],
                    videos: [
                        {
                            fileName: {
                                type: String,
                            },
                            genericFileType: {
                                type: String,
                                enum: ['image', 'video'],
                            },
                        },
                    ],
                    reactions: ReactionsSchemaTypes,
                    comments: [
                        {
                            userID: String,
                            message: String,
                            reactions: ReactionsSchemaTypes,
                            attachment: {
                                path: {
                                    type: String,
                                },
                                genericFileType: {
                                    type: String,
                                    enum: ['image', 'video'],
                                },
                            },
                            createdAt: {
                                type: Date,
                                default: Date.now,
                            },
                            replies: [
                                {
                                    userID: String,
                                    message: String,
                                    reactions: ReactionsSchemaTypes,
                                    attachment: {
                                        path: {
                                            type: String,
                                        },
                                        genericFileType: {
                                            type: String,
                                            enum: ['image', 'video'],
                                        },
                                    },
                                    createdAt: {
                                        type: Date,
                                        default: Date.now,
                                    },
                                },
                            ],
                        },
                    ],
                },
                { timestamps: true }
            ),
        ],
    },
    {
        timestamps: true,
        // toObject: { guetters: true, virtuals: true },
    }
);

UserSchema.post('save', function (err: any, next: NextFunction) {
    if (err.name === 'MongoError' && err.code === 11000) {
        new Error('Field already exists');
    }
    next();
});

UserSchema.pre<IUser>('save', function (next: any) {
    const saltRounds = 10;
    bcrypt.hash(this.password, saltRounds, (err, hash) => {
        if (err) {
            console.log('password hash error' + err.message);
            next();
        }
        this.password = hash;
        next();
    });
});

const UserModel = mongoose.model<IUser>('user', UserSchema);

export default UserModel;
