import express from 'express';
import AuthController from '../controllers/auth.controller';

const router = express.Router();

router.post('/signup', AuthController.signup);
router.post('/signin', AuthController.signin);
router.get('/me', AuthController.rememberMe);

export default router;
