"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const UserSchema = new mongoose_1.default.Schema({
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
}, { timestamps: true });
UserSchema.post('save', function (err, next) {
    if (err.name === 'MongoError' && err.code === 11000) {
        new Error('Field already exists');
    }
    next();
});
UserSchema.pre('save', function (next) {
    const saltRounds = 10;
    bcrypt_1.default.hash(this.password, saltRounds, (err, hash) => {
        if (err) {
            console.log('password hash error' + err.message);
            next();
        }
        this.password = hash;
        next();
    });
});
const UserModel = mongoose_1.default.model('user', UserSchema);
exports.default = UserModel;
