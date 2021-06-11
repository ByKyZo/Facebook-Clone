"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_controller_1 = __importDefault(require("../controllers/User.controller"));
const router = express_1.default.Router();
router.post('/signup', User_controller_1.default.signup);
router.post('/signin', User_controller_1.default.signin);
exports.default = router;
