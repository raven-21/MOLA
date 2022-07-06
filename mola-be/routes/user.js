import express from 'express';

import { login, authToken } from '../controllers/userCtrl.js';
import { validateToken } from '../middlewares/AuthMiddleware.js';

const router = express.Router();

// all routes in here starts with /user
router.post('/login', login);
router.get('/auth', validateToken, authToken);

export default router;