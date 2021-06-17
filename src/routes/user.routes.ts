import express from 'express';
import UserController from '../controllers/user.controller';
import multer from 'multer';

const router = express.Router();
const upload = multer();

router.get('/:id', UserController.getUser);

router.post('/post', upload.array('attachments'), UserController.addPost);
// router.post('/signin', UserController.signin);

export default router;
