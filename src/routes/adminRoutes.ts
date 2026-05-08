import express from 'express';
import multer from 'multer';
import { adminController } from '../controllers/adminController.js';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.get('/login', adminController.getLogin);
router.post('/login', adminController.postLogin);
router.get('/logout', adminController.logout);
router.get('/dashboard', adminController.getDashboard);
router.post('/puppies/add', upload.single('image'), adminController.addPuppy);
router.post('/puppies/delete/:id', adminController.deletePuppy);
router.post('/puppies/status/:id', adminController.togglePuppyStatus);

export default router;
