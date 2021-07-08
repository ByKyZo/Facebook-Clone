import express from 'express';
import multer from 'multer';
import UserController from '../controllers/user.controller';

const router = express.Router();
// TODO Revoir le max size
const upload = multer({
    limits: {
        fileSize: 9999999999999,
    },
});

router.get('/:id', UserController.getUser);

router.post('/post', upload.array('attachments'), UserController.addPost);
// router.post('/signin', UserController.signin);

export default router;
