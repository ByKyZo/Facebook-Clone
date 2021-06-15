import express from 'express';
import UserController from '../controllers/user.controller';

const router = express.Router();

router.get('/:id', UserController.getUser);
// router.post('/signin', UserController.signin);

export default router;
