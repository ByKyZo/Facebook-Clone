"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const multer_1 = __importDefault(require("multer"));
const router = express_1.default.Router();
const upload = multer_1.default();
router.get('/:id', user_controller_1.default.getUser);
router.post('/post', upload.array('attachments'), user_controller_1.default.addPost);
// router.post('/signin', UserController.signin);
exports.default = router;
