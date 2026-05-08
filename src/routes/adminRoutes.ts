import express from 'express';
import multer from 'multer';
import { adminController } from '../controllers/adminController.js';
import cookieParser from 'cookie-parser';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.use(cookieParser());

router.get('/login', adminController.getLogin);
router.post('/login', adminController.postLogin);
router.get('/dashboard', adminController.getDashboard);
router.post('/puppies/add', upload.single('image'), adminController.addPuppy);

export default router;
