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
const User_model_1 = __importDefault(require("../models/User.model"));
class UserController {
    static signup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { firstName, lastName, email, password, birthday, gender } = req.body;
            try {
                yield User_model_1.default.create({
                    firstName,
                    lastName,
                    email,
                    password,
                    birthday,
                    gender,
                });
                res.status(200).send('Sign Up successfully');
            }
            catch (err) {
                console.log(err.message);
                if (err.code === 11000)
                    return res.sendStatus(409);
                res.sendStatus(500);
            }
        });
    }
    static signin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            try {
                if (!email || !password)
                    return res.sendStatus(500);
                const userFindByEmail = yield User_model_1.default.findOne({ email });
                if (!userFindByEmail)
                    return res.sendStatus(500);
                console.log(userFindByEmail);
            }
            catch (err) {
                console.log(err.message);
                res.sendStatus(500);
            }
            // console.log('LOGIN');
        });
    }
}
exports.default = UserController;
