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
const mongoose_1 = require("mongoose");
class UserController {
    static getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userID = req.params.id;
            try {
                if (!mongoose_1.isValidObjectId(userID)) {
                    console.log('invalid user id');
                    res.send(400);
                    return;
                }
                const user = yield User_model_1.default.findById(req.params.id).select('-password');
                res.status(200).send(user);
            }
            catch (err) {
                console.log(err.message);
                res.send(500);
            }
        });
    }
}
exports.default = UserController;
