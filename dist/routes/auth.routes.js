"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
const router = express_1.default.Router();
router.post('/signup', auth_controller_1.default.signup);
router.post('/signin', auth_controller_1.default.signin);
router.get('/me', auth_controller_1.default.rememberMe);
exports.default = router;
