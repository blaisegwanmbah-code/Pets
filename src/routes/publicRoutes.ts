import express from 'express';
import { publicController } from '../controllers/publicController.js';

const router = express.Router();

router.get('/', publicController.getHome);
router.get('/available', publicController.getAvailable);
router.get('/apply', publicController.getApply);
router.post('/apply', publicController.submitApplication);

export default router;
